import { combineReducers } from 'redux';
import categoriesReducer from './reducers/categories.reducer';
import errorReducer from './reducers/error.reducer';

const rootReducer = combineReducers({
  error: errorReducer,
  categories: categoriesReducer,
});

export default rootReducer;
