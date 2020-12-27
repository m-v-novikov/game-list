import type {ConnectedProps} from "react-redux";
import type {GameFromList} from "../../redux/actions/typings/games";
import type {RootState} from "../../redux/reducers/typings";

import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from "react-redux";
import CommonStarRating from "../CommonStarRatings";
import {selectGamesList} from "../../redux/selectors/games";
import './style.scss';


type PropsFromRedux = ConnectedProps<typeof connector>;
const GamesList = ({games = []}: PropsFromRedux) => {
  return (
    <div className="list-wrapper">
      {games.map(({id, name, rating, background_image, released}: GameFromList) => (  //genres
        <NavLink to={`/games/${id}`} key={id} className="list-item-wrapper">
          <div className="game-card">
            <div className="game-image" style={{backgroundImage: `url(${background_image})`}} />
            <div className="game-name">{name}</div>
            <div className="game-footer">
              <div className="game-rating">
                <CommonStarRating rating={rating} />
              </div>
              <div className="game-released">{released}</div>
            </div>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  games: selectGamesList(state)
})

const mapDispatchTiProps = ({});

const connector = connect(mapStateToProps, mapDispatchTiProps)
export default connector(GamesList);