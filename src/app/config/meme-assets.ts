import { PROJECT_ASSETS } from "./project-assets.generated";

export const MEME_UI_BOARD_URL =
  "https://res.cloudinary.com/dlasbipjr/image/upload/v1784624985/Portfolio%20Minh%20Huy/MeMe/meme-ui-board.png";

export const MEME_UI_SCREENS = {
  home: PROJECT_ASSETS.meMe.home.secureUrl,
  gu: PROJECT_ASSETS.meMe.gu.secureUrl,
  accessories: PROJECT_ASSETS.meMe.accessories.secureUrl,
  shirts: PROJECT_ASSETS.meMe.shirts.secureUrl,
  cart: PROJECT_ASSETS.meMe.cart.secureUrl,
  search: PROJECT_ASSETS.meMe.search.secureUrl,
} as const;
