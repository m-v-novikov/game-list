import {AppActions} from "../actions/typings";
import {RECEIVE_GAME_DETAILS, RECEIVE_GAMES_LIST, RECEIVE_GAMES_FILTERS} from "../actions/games";


const defaultGamesState = {
  list: [],
  filters: {},
  gameDetails: null
}

const gamesReducer = (state = defaultGamesState, {type, payload}: AppActions) => {
  switch (type) {
    case RECEIVE_GAMES_LIST:
      return {
        ...state,
        list: payload
      };

    case RECEIVE_GAMES_FILTERS:
      return {
        ...state,
        filters: payload
      };

    case RECEIVE_GAME_DETAILS:
      return {
        ...state,
        gameDetails: payload
      };

    default:
      return state;
  }
}

export default gamesReducer;