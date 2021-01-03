import type {IntlShape} from "react-intl";
import type {GamesRootState} from "./games";

export type DefaultAppState = {
  mediaBreakpoint: AllAppBreakpoints,
  menuIsOpen: boolean
}

export enum AppBreakpoints {
  MOBILE = "mobile",
  TABLET = "tablet",
  DESKTOP = "desktop"
}

export type AllAppBreakpoints = AppBreakpoints.MOBILE | AppBreakpoints.TABLET | AppBreakpoints.DESKTOP;

export type RootState = {
  intl: IntlShape,
  app: DefaultAppState,
  games: GamesRootState
};
