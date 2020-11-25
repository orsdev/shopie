import actionTypes from '../type';

const initialState = {
  allProducts: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS_START:
      return {
        ...state,
        allProducts: null,
      };
    case actionTypes.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        allProducts: action.payload.products,
      };
    case actionTypes.GET_PRODUCTS_FAILED:
      return {
        ...state,
        allProducts: null,
      };
    default:
      return state;
  }
};

export default productReducer;
