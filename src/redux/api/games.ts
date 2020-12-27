import qs from 'qs';
import {baseApiUrl, key, requestHeaders} from "./index";
import {DefaultAction} from "../actions/typings";


export const getGames = async (action: DefaultAction<object>) => {
  const params = {
    method: "GET",
    ...requestHeaders
  };

  const searchParams = {
    key,
    ...action?.payload || {}
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

  const searchParams = {key};

  try{
    const response = await fetch(`${baseApiUrl}/games/${action.payload}?${qs.stringify(searchParams)}`, params);
    return await response.json().then(json => json).catch(err => ({status: `error - ${err}`}));
  }catch (e) {
    console.log(e)
  }
};