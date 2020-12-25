import {createSelectorCreator, defaultMemoize} from 'reselect';
import _, {isEqual} from "lodash";

export const createDeepEqualSelector = createSelectorCreator(
  defaultMemoize,
  isEqual
);

//createSelector,