import { combineReducers } from 'redux';
import categoriesReducer from './reducers/categories.reducer';
import toggleCartReducer from './reducers/toggleCart.reducer';
import errorReducer from './reducers/error.reducer';

const rootReducer = combineReducers({
  error: errorReducer,
  categories: categoriesReducer,
  toggleCart: toggleCartReducer
});

export default rootReducer;
