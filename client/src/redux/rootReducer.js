import { combineReducers } from 'redux';
import categoriesReducer from './reducers/categories.reducer';
import productReducer from './reducers/product.reducer';
import toggleCartReducer from './reducers/toggleCart.reducer';
import Cart from './reducers/cart.reducer';
import errorReducer from './reducers/error.reducer';

const rootReducer = combineReducers({
  error: errorReducer,
  categories: categoriesReducer,
  products: productReducer,
  cart: Cart,
  toggleCart: toggleCartReducer
});

export default rootReducer;
