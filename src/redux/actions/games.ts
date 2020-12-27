import type {FilterProps, GameFromList} from "./typings/games";


const root = '@games';
export const REQUEST_GAMES_LIST = `${root}/request-list`
export const RECEIVE_GAMES_LIST = `${root}/receive-list`
export const REQUEST_GAME_DETAILS = `${root}/request-game-details`
export const RECEIVE_GAME_DETAILS = `${root}/receive-game-details`

export const requestGamesList = (payload: FilterProps) => ({type: REQUEST_GAMES_LIST, payload});
export const receiveGamesList = (payload: Array<GameFromList>) => ({type: RECEIVE_GAMES_LIST, payload});

export const requestGameDetails = (payload: string) => ({type: REQUEST_GAME_DETAILS, payload});
export const receiveGameDetails = (payload: object) => ({type: RECEIVE_GAME_DETAILS, payload});