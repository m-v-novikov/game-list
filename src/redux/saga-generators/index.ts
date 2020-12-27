import {takeLatest, all} from 'redux-saga/effects';

import {APP_WAS_LOADED} from "../actions";
import {watchGamesGenerators} from "./games";

function* appWasLoaded() {
  yield console.log('appWasLoaded generator', APP_WAS_LOADED);
}

const watchAppGenerators = [
  takeLatest(APP_WAS_LOADED, appWasLoaded)
];

export default function* rootSaga() {
  yield all([
    ...watchAppGenerators,
    ...watchGamesGenerators
  ])
}
