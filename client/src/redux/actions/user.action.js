import actionTypes from '../type';

export const loginUser = (user) => ({
  type: actionTypes.LOGIN_USER,
  payload: user
});

export const logOutUser = () => ({
  type: actionTypes.LOGOUT_USER
});
