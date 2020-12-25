
const root = '@app';
export const APP_WAS_LOADED = `${root}/was-loaded`;

export const APP_SET_MEDIA_BREAKPOINT = `${root}/set-media-breakpoint`;

export const appSetMediaBreakpoint = (payload: string) => ({ type: APP_SET_MEDIA_BREAKPOINT, payload});