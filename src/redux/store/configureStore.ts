import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import {createLogger} from 'redux-logger'
import rootSaga from "../saga-generators";
import {APP_WAS_LOADED} from "../actions";

const logger = createLogger({
  // ...options
  predicate:() => process.env.NODE_ENV !== 'production',
  collapsed: true
});

const reduxDevTools = window['__REDUX_DEVTOOLS_EXTENSION__'] && window['__REDUX_DEVTOOLS_EXTENSION__']() ||
  window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] && window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']() || compose;
const sagaMiddleware = createSagaMiddleware();

export default function() {
  const middlewares = [sagaMiddleware, logger];
  const store = createStore(
    rootReducer,
    compose(applyMiddleware(...middlewares), reduxDevTools)
  );

  sagaMiddleware.run(rootSaga)
  store.dispatch({type: APP_WAS_LOADED});

  return store;
};
