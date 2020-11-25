import { addItemToCart, clearItemFromCart, reduceItemQty } from '../../utils/cart';
import actionTypes from '../type';

const initialState = {
  cartItems: []
}

const Cart = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM_TO_CART:
      return ({
        ...state,
        cartItems: addItemToCart(action.payload, state.cartItems)
      })
    case actionTypes.CLEAR_ITEM:
      return ({
        ...state,
        cartItems: clearItemFromCart(action.payload, state.cartItems)
      })
    case actionTypes.REDUCE_ITEM:
      return ({
        ...state,
        cartItems: reduceItemQty(action.payload, state.cartItems)
      })
    default:
      return state
  }
}

export default Cart;