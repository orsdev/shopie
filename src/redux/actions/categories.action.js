import axios from '../../axios/instance';
import actionTypes from '../type';

function filterCategories(categories) {
  const isDuplicate = [];
  const newArray = [];
  categories.forEach((ctg) => {
    if (!isDuplicate.includes(ctg.category)) {
      newArray.push({
        id: ctg.id,
        category: ctg.category,
        image: ctg.image,
      });
    }

    isDuplicate.push(ctg.category);
  });
  return newArray;
}

const getCategories = () => async (dispatch) => {
  dispatch({
    type: actionTypes.GET_CATEGORIES_START,
  });

  dispatch({
    type: actionTypes.CLEAR_ERROR,
  });

  try {
    const request = await axios.get('/');
    const { data } = request;
    dispatch({
      type: actionTypes.GET_CATEGORIES_SUCCESS,
      payload: {
        categories: filterCategories(data),
      },
    });
  } catch (e) {
    dispatch({
      type: actionTypes.SET_ERROR,
      payload:
        'Failed to get categories! Please refresh your browser.',
    });

    dispatch({
      type: actionTypes.GET_CATEGORIES_FAILED,
    });
  }
};

export default getCategories;
