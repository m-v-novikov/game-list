import type {DefaultAppState, RootState} from "../reducers/typings";

import {createSelector, createSelectorCreator, defaultMemoize} from 'reselect';
import _, {isEqual} from "lodash";

export const createDeepEqualSelector = createSelectorCreator(
  defaultMemoize,
  isEqual
);

export const selectAppNamespace = (state: RootState) => state.app;

export const selectAppMediaBreakpoint = createSelector(
  selectAppNamespace,
  (app: DefaultAppState) => app.mediaBreakpoint
)