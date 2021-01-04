import type {GameDetails, GamesFilters, GamesList} from "../../actions/typings/games";

export type GamesRootState = {
  list: GamesList,
  gameDetails: GameDetails,
  filters: GamesFilters
}