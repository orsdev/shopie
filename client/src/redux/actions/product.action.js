import axios from '../../axios/instance';
import actionTypes from '../type';


const getProducts = () => async (dispatch) => {
  dispatch({
    type: actionTypes.GET_PRODUCTS_START,
  });

  dispatch({
    type: actionTypes.CLEAR_ERROR,
  });

  try {
    const request = await axios.get('/');
    const { data } = request;
    dispatch({
      type: actionTypes.GET_PRODUCTS_SUCCESS,
      payload: {
        products: data,
      },
    });
  } catch (e) {
    dispatch({
      type: actionTypes.SET_ERROR,
      payload:
        'Failed to get PRODUCT! Please refresh your browser.',
    });

    dispatch({
      type: actionTypes.GET_PRODUCTS_FAILED,
    });
  }
};

export default getProducts;
