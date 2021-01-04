import type {ReactElement} from 'react';
import type {match} from 'react-router-dom';
import type {RootState} from "../../redux/reducers/typings";
import type {GameDetails} from "../../redux/actions/typings/games";

import React, {useEffect} from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import {NavLink, withRouter} from 'react-router-dom';
import {requestGameDetails} from "../../redux/actions/games";
import {selectGameDetails} from "../../redux/selectors/games";
import GameDetailsBlock from "../../components/GameDetailsBlock";

import './style.scss';

type GameMatchParams = {
  id: string
}

type Props = {
  match: match<GameMatchParams>,
  requestGameDetails: Function,
  gameDetails: GameDetails
}

const Game = ({match, requestGameDetails, gameDetails}: Props): ReactElement => {
  useEffect(() => {
    requestGameDetails(match.params?.id)
  }, [])

  function isGameDetailsReady() {
    return gameDetails && (+match.params.id === gameDetails.id);
  }

  return (
    <div className="game-details">
      <div className="panel"><NavLink to="/">Back</NavLink></div>
      {isGameDetailsReady() && <GameDetailsBlock gameDetails={gameDetails} />}
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  gameDetails: selectGameDetails(state)
})

const enhance = compose(
  withRouter,
  connect(mapStateToProps, {requestGameDetails})
)

export default enhance(Game);