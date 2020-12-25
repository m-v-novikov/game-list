import type {ConnectedProps} from 'react-redux';

import React, {lazy, Suspense} from 'react';
import {connect} from 'react-redux';
import {Router, Route, Switch} from 'react-router-dom';
import {createBrowserHistory as createHistory} from 'history';
import Media from 'react-media';
import NotFoundPage from "./pages/NotFoundPage";
import {appSetMediaBreakpoint} from "./redux/actions";

type PropsFromRedux = ConnectedProps<typeof connector>

const dynamicRoutesConfig = [
  {
    path: "/",
    pathToComponent: "./pages/Home"
  }
];


export const history = createHistory();
function AppRouter({appSetMediaBreakpoint}: PropsFromRedux){
  return(
    <Router history={history}>
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
                    const Loadable = lazy(() => import(/* webpackPrefetch: true */ `${route.pathToComponent}`));
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
    </Router>
  )
}

const mapDispatchTiProps = ({appSetMediaBreakpoint});
const connector = connect(null, mapDispatchTiProps)

export default connector(AppRouter);
