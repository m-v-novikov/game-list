import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {IntlProvider} from 'react-intl-redux'
import AppRouter from './router/AppRouter';
import configureStore from './redux/store/configureStore';

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <IntlProvider locale="en">
      <AppRouter />
    </IntlProvider>
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
