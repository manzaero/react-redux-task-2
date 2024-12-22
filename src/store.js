import {applyMiddleware, combineReducers, createStore} from "redux";
import {thunk} from 'redux-thunk'
import {setReducer, otherReducer} from "./reducers/index.js";

const reducers = combineReducers({
    stateStore: setReducer,
    otherStore: otherReducer,
})

export const store = createStore(reducers, applyMiddleware(thunk))