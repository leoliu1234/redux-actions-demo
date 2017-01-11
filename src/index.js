import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Router, Route, hashHistory } from 'react-router';

import Home from './containers/home';
import App from './containers/app';
import rootReducer from './reducers';

const store = createStore(rootReducer,
    applyMiddleware(thunk)
);
render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App} />
            <Route path="Home" component={Home} />
        </Router>
    </Provider >,
    document.getElementById('root'));