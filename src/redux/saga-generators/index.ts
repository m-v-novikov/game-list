import {takeLatest, all} from 'redux-saga/effects';

import {APP_WAS_LOADED} from "../actions";

function* appWasLoaded() {
  yield console.log('appWasLoaded generator', APP_WAS_LOADED);
}

const watchAppGenerators = [
  takeLatest(APP_WAS_LOADED, appWasLoaded)
];

export default function* rootSaga() {
  yield all([
    ...watchAppGenerators
  ])
}
