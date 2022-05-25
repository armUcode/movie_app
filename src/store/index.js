import { createStore, applyMiddleware, compose } from "redux";
import  thunk from 'redux-thunk';

import rootReducer from "../reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

var store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk))) //para hacer peticiones asincronas

export default store;
