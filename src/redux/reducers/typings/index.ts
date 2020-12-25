import rootReducer from "../index";

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

export type RootState = ReturnType<typeof rootReducer>;
