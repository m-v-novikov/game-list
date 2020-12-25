import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './AppRouter';
import configureStore from './redux/store/configureStore';
import {Provider} from 'react-redux';
import {IntlProvider} from 'react-intl-redux'

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <IntlProvider locale="en">
      <AppRouter />
    </IntlProvider>
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
