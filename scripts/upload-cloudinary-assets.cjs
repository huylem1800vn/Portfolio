const fs = require("fs");
const path = require("path");

require("../../ProductManagement/node_modules/dotenv").config({
  path: path.resolve(__dirname, "../.env"),
});

const { v2: cloudinary } = require("../../ProductManagement/node_modules/cloudinary");

const projectRoot = path.resolve(__dirname, "..");
const importsRoot = path.join(projectRoot, "src", "imports");
const outputFile = path.join(projectRoot, "src", "app", "config", "cloudinary-assets.generated.json");
const shouldDeleteLocal = process.argv.includes("--delete-local");

const allowedExtensions = new Set([".png", ".jpg", ".jpeg", ".webp"]);
const excludedRelativePaths = new Set([
  "hero/original-photo.JPG",
  "hero/portrait-illustration-flowers.jpeg",
]);

const cloudFolder = process.env.PORTFOLIO_CLOUD_FOLDER || "Portfolio Minh Huy";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET,
});

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walk(fullPath));
      continue;
    }

    const extension = path.extname(entry.name).toLowerCase();
    if (allowedExtensions.has(extension)) {
      files.push(fullPath);
    }
  }

  return files;
}

function toImportRelativePath(filePath) {
  return path.relative(importsRoot, filePath).split(path.sep).join("/");
}

function toPublicId(relativePath) {
  return relativePath.replace(path.extname(relativePath), "");
}

function deleteLocalFile(relativePath) {
  const absolutePath = path.join(importsRoot, relativePath);
  if (fs.existsSync(absolutePath)) {
    fs.unlinkSync(absolutePath);
  }
}

async function uploadSingle(filePath) {
  const relativePath = toImportRelativePath(filePath);
  const publicId = toPublicId(relativePath);

  const result = await cloudinary.uploader.upload(filePath, {
    folder: cloudFolder,
    public_id: publicId,
    overwrite: true,
    resource_type: "image",
    use_filename: false,
    unique_filename: false,
  });

  return {
    relativePath,
    secureUrl: result.secure_url,
    publicId: result.public_id,
    bytes: result.bytes,
    width: result.width,
    height: result.height,
    format: result.format,
  };
}

async function main() {
  if (!process.env.CLOUD_NAME || !process.env.CLOUD_KEY || !process.env.CLOUD_SECRET) {
    throw new Error("Missing Cloudinary credentials. Check Modern Portfolio Website/.env");
  }

  const allFiles = walk(importsRoot)
    .map((filePath) => ({
      filePath,
      relativePath: toImportRelativePath(filePath),
    }))
    .filter((entry) => !excludedRelativePaths.has(entry.relativePath));

  const manifest = {
    generatedAt: new Date().toISOString(),
    cloudName: process.env.CLOUD_NAME,
    folder: cloudFolder,
    deletedLocalFiles: shouldDeleteLocal,
    excluded: Array.from(excludedRelativePaths),
    assets: {},
  };

  for (const entry of allFiles) {
    console.log(`Uploading ${entry.relativePath} ...`);
    const result = await uploadSingle(entry.filePath);
    manifest.assets[entry.relativePath] = result;

    if (shouldDeleteLocal) {
      deleteLocalFile(entry.relativePath);
      console.log(`Deleted local file ${entry.relativePath}`);
    }
  }

  fs.writeFileSync(outputFile, JSON.stringify(manifest, null, 2));
  console.log(`\nDone. Manifest written to ${path.relative(projectRoot, outputFile)}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
