import {AllAppBreakpoints} from "../../reducers/typings";

export type DefaultAction<P> = {
  type: string,
  payload: P
}

export type AppSetMediaBreakpoint = DefaultAction<AllAppBreakpoints>

export type AppActions = AppSetMediaBreakpoint;