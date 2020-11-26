import actionTypes from '../type';

export const addItemToCart = (item) => {
  return ({
    type: actionTypes.ADD_ITEM_TO_CART,
    payload: item
  })
}

export const clearItem = (itemId) => {
  return ({
    type: actionTypes.CLEAR_ITEM,
    payload: itemId
  })
}

export const clearAllCartItems = () => {
  return ({
    type: actionTypes.CLEAR_ALL_ITEM
  })
}

export const reduceItemQty = (itemId) => ({
  type: actionTypes.REDUCE_ITEM,
  payload: itemId
})