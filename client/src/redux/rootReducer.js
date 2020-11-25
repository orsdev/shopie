import { combineReducers } from 'redux';
import categoriesReducer from './reducers/categories.reducer';
import productReducer from './reducers/product.reducer';
import toggleCartReducer from './reducers/toggleCart.reducer';
import errorReducer from './reducers/error.reducer';

const rootReducer = combineReducers({
  error: errorReducer,
  categories: categoriesReducer,
  products: productReducer,
  toggleCart: toggleCartReducer
});

export default rootReducer;
