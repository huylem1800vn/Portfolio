import { PROJECT_ASSETS } from "./project-assets.generated";

export const ANG_ANG_BRAND_IDENTITY_LOGO_URL =
  PROJECT_ASSETS.angAng.brandIdentityLogo.secureUrl;

const optimizeCloudinaryImage = (url: string) =>
  url.replace("/image/upload/", "/image/upload/f_auto,q_auto:best/");

const finalUiImage = (asset: {
  secureUrl: string;
  width: number;
  height: number;
}) => ({
  src: optimizeCloudinaryImage(asset.secureUrl),
  width: asset.width,
  height: asset.height,
});

export const ANG_ANG_FINAL_UI_IMAGES = {
  onboarding: finalUiImage(PROJECT_ASSETS.angAng.finalUiOnboarding),
  home: finalUiImage(PROJECT_ASSETS.angAng.finalUiHome),
  map: finalUiImage(PROJECT_ASSETS.angAng.finalUiMap),
  mood: finalUiImage(PROJECT_ASSETS.angAng.finalUiMood),
  reviewer: finalUiImage(PROJECT_ASSETS.angAng.finalUiReviewer),
  localProfile: finalUiImage(PROJECT_ASSETS.angAng.finalUiLocalProfile),
  verifiedProfile: finalUiImage(PROJECT_ASSETS.angAng.finalUiVerifiedProfile),
} as const;
