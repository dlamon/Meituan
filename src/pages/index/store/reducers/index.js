import { combineReducers } from 'redux';
import tabReducer from './tabReducer';
import categoryReducer from './categoryReducer';
import homeListReducer from './homeListReducer';

const rootReducer = combineReducers({ tabReducer, categoryReducer, homeListReducer });
export default rootReducer;
