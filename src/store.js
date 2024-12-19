import {applyMiddleware, combineReducers, createStore} from "redux";
import {useReducers} from "./reducers.js";
import {thunk} from "redux-thunk";

const reducers = combineReducers({
    state: useReducers
})

export const store = createStore(reducers, applyMiddleware(thunk))