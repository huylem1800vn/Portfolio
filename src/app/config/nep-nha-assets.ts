import { PROJECT_ASSETS } from "./project-assets.generated";

export const NEP_NHA_THUMBNAIL_URL = PROJECT_ASSETS.nepNha.thumbnail.secureUrl;
export const NEP_NHA_LOGO_MARK_URL = PROJECT_ASSETS.nepNha.logoMark.secureUrl;
export const NEP_NHA_INFORMATION_ARCHITECTURE_URL =
  PROJECT_ASSETS.nepNha.informationArchitecture.secureUrl;

export const NEP_NHA_UI = {
  onboarding: PROJECT_ASSETS.nepNha.onboarding.secureUrl,
  today: PROJECT_ASSETS.nepNha.today.secureUrl,
  family: PROJECT_ASSETS.nepNha.family.secureUrl,
  home: PROJECT_ASSETS.nepNha.home.secureUrl,
  memories: PROJECT_ASSETS.nepNha.memories.secureUrl,
} as const;
