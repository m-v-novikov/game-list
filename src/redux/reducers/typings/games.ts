import type {GameDetails, GameFromList, GamesFilters} from "../../actions/typings/games";

export type GamesRootState = {
  list: Array<GameFromList>,
  gameDetails: GameDetails,
  filters: GamesFilters
}