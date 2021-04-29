import { combineReducers } from '@reduxjs/toolkit';
import { routerReducer } from 'react-router-redux';
import {counterReducer} from '../reducers/counter/counter'


export const rootReducer = combineReducers({
    counter: counterReducer,
    routing: routerReducer,
});
