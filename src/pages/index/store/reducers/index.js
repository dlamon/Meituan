import { combineReducers } from 'redux';
import tabReducer from './tabReducer';
import categoryReducer from './categoryReducer';

const rootReducer = combineReducers({ tabReducer, categoryReducer });
export default rootReducer;
