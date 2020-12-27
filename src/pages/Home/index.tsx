import type {ReactElement} from 'react';

import React, {useEffect} from 'react';
import GamesList from "../../components/GamesList";

import './style.scss';


export default (): ReactElement => {
  //https://medium.com/officialrajdeepsingh/how-to-add-scss-sass-in-react-js-6615b6e77e56

  //https://fettblog.eu/typescript-react/hooks/
  // https://redux.js.org/recipes/usage-with-typescript

  useEffect(() => {

  }, [])

  //https://github.com/ChoTotOSS/react-paginating#examples - add paginator
  return (
    <div className="game-list">
      <div className="panel">Filters block</div>
      <GamesList />
      <div className="panel" />
    </div>
  );
};