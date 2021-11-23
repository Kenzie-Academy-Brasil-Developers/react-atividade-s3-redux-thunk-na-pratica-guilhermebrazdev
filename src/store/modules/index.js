import { createStore, combineReducers, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import useReducer from "./user/reducer";

const reducers = combineReducers({ user: useReducer });

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
