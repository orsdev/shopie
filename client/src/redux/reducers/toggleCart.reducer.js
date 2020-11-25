import actionTypes from '../type';

const initialState = {
  displayCart: 'hide',
};

const toggleCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_CART:
      return {
        ...state,
        displayCart: action.payload,
      };
    default:
      return state;
  }
};

export default toggleCartReducer;
