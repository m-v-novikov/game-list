import type {ReactElement} from 'react';

import React from 'react';
import {NavLink} from "react-router-dom";
import './style.scss';


const NotFoundPage = (): ReactElement => (
  <div className="txt-wrapper">
    <div className="panel">
      <h1>404</h1>
      <p className="helper">Page not found</p>
      <div><NavLink to="/">Home</NavLink></div>
    </div>
  </div>
);

export default NotFoundPage;
