import type {ReactElement} from 'react';

import React from 'react';
import './style.scss';


export default (): ReactElement => {
  //https://medium.com/officialrajdeepsingh/how-to-add-scss-sass-in-react-js-6615b6e77e56
  //https://codepen.io/saransh/pen/BKJun - background
  //https://github.com/davinchee/react-typescript-boilerplate

  //https://fettblog.eu/typescript-react/hooks/
  // https://redux.js.org/recipes/usage-with-typescript
  return (
    <div className="temp-style">
      <h1>Hello World!</h1>
    </div>
  );
};