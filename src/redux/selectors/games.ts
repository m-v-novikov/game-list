import type {RootState} from "../reducers/typings";
import type {GamesRootState} from "../reducers/typings/games";

import {createDeepEqualSelector} from "./index";

export const selectGamesNamespace = (state: RootState) => state.games;

export const selectGamesList = createDeepEqualSelector(
  selectGamesNamespace,
  (games: GamesRootState) => games.list
)

export const selectGameDetails = createDeepEqualSelector(
  selectGamesNamespace,
  (games: GamesRootState) => games.gameDetails
)