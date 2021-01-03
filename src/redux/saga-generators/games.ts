import type {DefaultAction} from "../actions/typings";
import type {GamesFilters} from "../actions/typings/games";
import type {RootState} from "../reducers/typings";

import {takeLatest, fork, join, put, select} from 'redux-saga/effects';
import _ from 'lodash';
import api from '../api'
import {
  receiveGameDetails,
  receiveGamesFilters,
  receiveGamesList,
  REQUEST_GAME_DETAILS,
  REQUEST_GAMES_LIST
} from '../actions/games';

export function* getGamesSaga(action: DefaultAction<GamesFilters>) {
  try {
    const request = yield fork(api.getGames, action);
    const response = yield join(request);

    const store: RootState = yield select();
    if (response?.results) {
      const {results, count} = response;
      const games = yield _.map(
        results,
        ({id, name, rating, genres, background_image, released}) => ({id, name, rating, genres, background_image, released})
      );
      const itemsPerPage = action.payload.page_size || results.length + 1;
      const pageCount = Math.ceil(count/itemsPerPage);
      yield put(receiveGamesList(games));
      yield put(receiveGamesFilters({
        ...store.games.filters,
        ...action.payload,
        pageCount
      }))
    } else {
      yield put(receiveGamesList([]));
      yield put(receiveGamesFilters({
        ...store.games.filters,
        ...action.payload
      }))
    }
  } catch (e) {
    console.log(e);
  }
}

export function* getGameDetailsSaga(action: DefaultAction<string>) {
  try {
    const request = yield fork(api.getGameDetails, action);
    const response = yield join(request);

    if (!!response) {
      const {
        background_image,
        background_image_additional,
        description_raw,
        developers,
        dominant_color,
        genres,
        id,
        name,
        platforms,
        rating,
        released,
        website
      } = response;

      const gameDetails = {
        background_image,
        background_image_additional,
        description_raw,
        developers,
        dominant_color,
        genres,
        id,
        name,
        platforms,
        rating,
        released,
        website
      }

      yield put(receiveGameDetails(gameDetails));
    }

  }catch (e) {
    console.log(e);
  }
}


export const watchGamesGenerators = [
  takeLatest(REQUEST_GAMES_LIST, getGamesSaga),
  takeLatest(REQUEST_GAME_DETAILS, getGameDetailsSaga)
];
