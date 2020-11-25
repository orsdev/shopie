import actionTypes from '../type';

const toggleCart = (isOpened) => ({
  type: actionTypes.TOGGLE_CART,
  payload: isOpened
}
);

export default toggleCart;
