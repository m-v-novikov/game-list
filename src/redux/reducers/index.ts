import type {DefaultAppState} from "./typings";
import type {AppActions} from "../actions/typings";
import {AppBreakpoints} from "./typings";

import { combineReducers } from 'redux';
import { intlReducer } from 'react-intl-redux';
import {APP_SET_MEDIA_BREAKPOINT} from "../actions";

export const defaultAppState: DefaultAppState = {
  mediaBreakpoint: AppBreakpoints.DESKTOP,
  menuIsOpen: false
};

const appReducer = (state = defaultAppState, {type, payload}: AppActions) => {
  switch (type) {
    case APP_SET_MEDIA_BREAKPOINT:
      return {
        ...state,
        mediaBreakpoint: payload
      };

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  intl: intlReducer,
  app: appReducer
});

export default rootReducer;
