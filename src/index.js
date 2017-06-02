import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

import HelloCenter from './components/HelloCenter';
import reducers from './reducers';

const preloadedState = window.__PRELOADED_STATE__
delete window.__PRELOADED_STATE__

const history = createHistory();
const store = createStore(
    reducers, 
    preloadedState,
    applyMiddleware(
        routerMiddleware(history), 
        thunkMiddleware
));

render(
    <Provider store = { store }>
        <ConnectedRouter history={history}>
            <div>
                <Route exact path="/" component={HelloCenter}></Route>
            </div>
        </ConnectedRouter>
    </Provider>
    , document.getElementById('root')
);