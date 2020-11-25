import actionTypes from '../type';

const initialState = {
  allCategories: null,
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CATEGORIES_START:
      return {
        ...state,
        allCategories: null,
      };
    case actionTypes.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        allCategories: action.payload.categories,
      };
    case actionTypes.GET_CATEGORIES_FAILED:
      return {
        ...state,
        allCategories: null,
      };
    default:
      return state;
  }
};

export default categoriesReducer;
