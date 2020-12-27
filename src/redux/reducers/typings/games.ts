import type {GameDetails, GameFromList} from "../../actions/typings/games";

export type GamesRootState = {
  list: Array<GameFromList>,
  gameDetails: GameDetails
}