import {getGameDetails, getGames} from "./games";

export const key = `${process.env.GAME_API_KEY}`;
export const baseApiUrl = 'https://api.rawg.io/api';

export const requestHeaders = {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
};

export default {
  //api requests here
  getGames,
  getGameDetails
}
