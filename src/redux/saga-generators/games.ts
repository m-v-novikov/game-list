import type {DefaultAction} from "../actions/typings";
import type {FilterProps} from "../actions/typings/games";

import {takeLatest, fork, join, put} from 'redux-saga/effects';
import _ from 'lodash';

import api from '../api'
import {receiveGameDetails, receiveGamesList, REQUEST_GAME_DETAILS, REQUEST_GAMES_LIST} from '../actions/games';

export function* getGamesSaga(action: DefaultAction<FilterProps>) {
  try {
    const request = yield fork(api.getGames, action);
    const response = yield join(request);

    if (response?.results) {
      const games = yield _.map(
        response.results,
        ({id, name, rating, genres, background_image, released}) => ({id, name, rating, genres, background_image, released})
      );
      yield put(receiveGamesList(games));
    }
  }catch (e) {
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
