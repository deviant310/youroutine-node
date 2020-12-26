import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@jfxteam/font-awesome/css/all.min.css';
import './style.css';

import App from './app';
import Login from "components/login";

const Reducers = require.context('reducers', false, /\.ts$/);

const store = createStore(combineReducers({
  notes: Reducers('./list.ts').default
}));

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login}/>
        <Route path="/" component={App}/>
      </Switch>
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));
