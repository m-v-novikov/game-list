import type {DefaultAction} from "../actions/typings";
import type {GamesFilters} from "../actions/typings/games";

import qs from 'qs';
import {baseApiUrl, key, requestHeaders} from "./index";


export const getGames = async (action: DefaultAction<object>) => {
  const params = {
    method: "GET",
    ...requestHeaders
  };

  const searchParams: GamesFilters = {
    ...(key ? {key} : {}),
    ...(action?.payload || {})
  }
  if (!searchParams.search) {
    delete searchParams.search;
    delete searchParams.search_precise;
  }

  try{
    const response = await fetch(`${baseApiUrl}/games?${qs.stringify(searchParams)}`, params);
    return await response.json().then(json => json).catch(err => ({status: `error - ${err}`}));
  }catch (e) {
    console.log(e)
  }
};

export const getGameDetails = async (action: DefaultAction<string>) => {
  const params = {
    method: "GET",
    ...requestHeaders
  };

  const searchParams = {...(key ? {key} : {})};

  try{
    const response = await fetch(`${baseApiUrl}/games/${action.payload}?${qs.stringify(searchParams)}`, params);
    return await response.json().then(json => json).catch(err => ({status: `error - ${err}`}));
  }catch (e) {
    console.log(e)
  }
};