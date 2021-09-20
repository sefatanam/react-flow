// import react and react DOM
import React from 'react';
import ReactDOM from "react-dom";
import App from "./components/App";
import {applyMiddleware, compose, createStore} from "redux";
import reducers from "./reducers"
import {Provider} from "react-redux";

const xomposeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, xomposeEnhancers(applyMiddleware()));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.querySelector("#root"))
