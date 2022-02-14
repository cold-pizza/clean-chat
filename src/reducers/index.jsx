import { combineReducers } from 'redux';
import basicReducer from "./basicReducer";
import switchReducer from './switchReducer';
import stateReducer from './stateReducer';

const store = combineReducers({basicReducer, switchReducer, stateReducer});

export default store;