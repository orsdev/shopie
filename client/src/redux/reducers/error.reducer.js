import actionTypes from '../type';

const initialState = {
  httpError: null,
};

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ERROR:
      return {
        ...state,
        httpError: action.payload,
      };
    case actionTypes.CLEAR_ERROR:
      return {
        ...state,
        httpError: null,
      };
    default:
      return state;
  }
};

export default errorReducer;
