import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@jfxteam/font-awesome/css/all.min.css';
import './style.css';

import App from './app';

const Reducers = require.context('reducers', false, /\.ts$/);

const store = createStore(combineReducers({
  notes: Reducers('./notes.ts').default
}));


ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));
