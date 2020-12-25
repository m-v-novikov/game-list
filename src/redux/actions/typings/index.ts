import {AllAppBreakpoints} from "../../reducers/typings";
import {APP_SET_MEDIA_BREAKPOINT} from "../index";

export type AppSetMediaBreakpoint = {
  type: typeof APP_SET_MEDIA_BREAKPOINT,
  payload: AllAppBreakpoints
}

export type AppActions = AppSetMediaBreakpoint;