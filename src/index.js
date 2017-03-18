import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Router, Route, hashHistory } from 'react-router';

import Home from './containers/home';
import App from './containers/app';
import rootReducer from './reducers';
import createLogger from 'redux-logger';

const middleware = [thunk];
// if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
// }


const store = createStore(rootReducer,
    applyMiddleware(...middleware)
);
render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App} />
            <Route path="Home" component={Home} />
        </Router>
    </Provider >,
    document.getElementById('root'));