import actionTypes from '../type';

const initialState = {
  user: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_USER:
      return {
        ...state,
        user: action.payload
      };
    case actionTypes.LOGOUT_USER:
      return {
        ...state,
        user: null
      };
    default:
      return state;
  }
};

export default userReducer;
