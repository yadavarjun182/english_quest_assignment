import { applyMiddleware, combineReducers, legacy_createStore } from 'redux'
import { reducer as bookReducer } from './Redux/Books/reducer'
import { reducer as AuthReducer } from './Redux/Authentication/reducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({ bookReducer, AuthReducer })


export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))