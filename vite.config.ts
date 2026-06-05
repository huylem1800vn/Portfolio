import fs from 'fs'
import path from 'path'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

const projectRoot = __dirname
const importsRoot = path.resolve(projectRoot, 'src/imports')
const cloudManifestPath = path.resolve(projectRoot, 'src/app/config/cloudinary-assets.generated.json')
const cloudAssetExtensions = new Set(['.png', '.jpg', '.jpeg', '.webp'])

function canonicalAssetPath(value: string) {
  return path.normalize(value).replace(/\\/g, '/').normalize('NFC')
}

function assetPathVariants(value: string) {
  const base = path.normalize(value).replace(/\\/g, '/')
  return new Set([base, base.normalize('NFC'), base.normalize('NFD')])
}

function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

function loadCloudAssetMap() {
  if (!fs.existsSync(cloudManifestPath)) {
    return new Map<string, string>()
  }

  const raw = fs.readFileSync(cloudManifestPath, 'utf8')
  const parsed = JSON.parse(raw) as {
    assets?: Record<string, { secureUrl?: string }>
  }

  const map = new Map<string, string>()

  for (const [relativePath, asset] of Object.entries(parsed.assets ?? {})) {
    if (!asset?.secureUrl) continue
    const absolutePath = path.resolve(importsRoot, relativePath)
    for (const variant of assetPathVariants(absolutePath)) {
      map.set(variant, asset.secureUrl)
    }
  }

  return map
}

function cloudinaryAssetResolver() {
  let cloudAssetMap = new Map<string, string>()

  return {
    name: 'cloudinary-asset-resolver',
    enforce: 'pre' as const,
    configResolved() {
      cloudAssetMap = loadCloudAssetMap()
    },
    resolveId(source: string, importer?: string) {
      if (!importer || source.startsWith('figma:asset/')) {
        return null
      }

      const extension = path.extname(source).toLowerCase()
      if (!cloudAssetExtensions.has(extension)) {
        return null
      }

      const resolvedPath = canonicalAssetPath(path.resolve(path.dirname(importer), source))
      const secureUrl = cloudAssetMap.get(resolvedPath)

      if (!secureUrl) {
        return null
      }

      return `\0cloudinary-asset:${resolvedPath}`
    },
    load(id: string) {
      if (!id.startsWith('\0cloudinary-asset:')) {
        return null
      }

      const resolvedPath = id.replace('\0cloudinary-asset:', '')
      const secureUrl = cloudAssetMap.get(resolvedPath)

      if (!secureUrl) {
        return null
      }

      return `export default ${JSON.stringify(secureUrl)};`
    },
  }
}

export default defineConfig({
  plugins: [
    figmaAssetResolver(),
    cloudinaryAssetResolver(),
    // The React and Tailwind plugins are both required for this project setup,
    // even if Tailwind is not being actively used in every component.
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
