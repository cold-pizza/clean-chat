import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import basicReducer from "./basicReducer";
import switchReducer from './switchReducer';
import stateReducer from './stateReducer';

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["stateReducer"]
}

const rootReducer = combineReducers({basicReducer, switchReducer, stateReducer});

export default persistReducer(persistConfig, rootReducer);