import type {ConnectedProps} from 'react-redux';

import React, {lazy, Suspense, useEffect} from 'react';
import {connect} from 'react-redux';
import {Router, Route, Switch} from 'react-router-dom';
import {createBrowserHistory as createHistory} from 'history';
import Media from 'react-media';
import NotFoundPage from "../pages/NotFoundPage";
import {appSetMediaBreakpoint} from "../redux/actions";
import {requestGamesList} from "../redux/actions/games";

import './style.scss';

type PropsFromRedux = ConnectedProps<typeof connector>

const dynamicRoutesConfig = [
  {
    path: "/",
    pathToComponent: "pages/Home"
  },
  {
    path: "/games/:id",
    pathToComponent: "pages/Game"
  }
];

export const history = createHistory();
function AppRouter({appSetMediaBreakpoint, requestGamesList}: PropsFromRedux){
  useEffect(() => {
    requestGamesList({dates: '2020-01-01,2020-12-31', genres: 'action', page_size: 40});
  }, [])

  return(
    <Router history={history}>
      <div>
        <div className="stars-bg">
          <div id="stars" />
          <div id="stars2" />
          <div id="stars3" />
        </div>

        <div id="inner-wrapper">
          <Media
            queries={{
              mobile: "(max-width: 999px)",
              tablet: "(min-width: 1000px) and (max-width: 1400px)"
            }}
            onChange={(matches) => {
              if (matches?.mobile){
                appSetMediaBreakpoint("mobile");
              } else if(matches?.tablet){
                appSetMediaBreakpoint("tablet");
              } else {
                appSetMediaBreakpoint("desktop");
              }
            }}/>

          <main className={"main"}>
            <Switch>
              {dynamicRoutesConfig.map((route, i) => (
                <Route
                  key={i}
                  path={route.path}
                  component={() => {
                    const Loadable = lazy(() => import(/* webpackPrefetch: true */ `../${route.pathToComponent}`));
                    return (
                      <Suspense fallback={<div>Loading...</div>}>
                        <Loadable />
                      </Suspense>
                    )
                  }}
                  exact={true}
                />
              ))
              }

              <Route component={NotFoundPage} />
            </Switch>
          </main>
        </div>
      </div>
    </Router>
  )
}

const mapDispatchTiProps = ({appSetMediaBreakpoint, requestGamesList});
const connector = connect(null, mapDispatchTiProps)

export default connector(AppRouter);
