import logoMarkSvg from "./brand-identity-logo.svg?raw";

export default function Frame() {
  return (
    <div
      className="w-full [&>svg]:block [&>svg]:h-auto [&>svg]:w-full"
      dangerouslySetInnerHTML={{ __html: logoMarkSvg }}
    />
  );
}
