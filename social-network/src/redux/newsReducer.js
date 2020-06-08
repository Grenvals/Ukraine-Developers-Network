import { dateHandler } from '../utils/handlers/handlers';
import { newsAPI } from '../api/api';

// Actions
const SET_TOP_HEADLINES = 'news/SET_TOP_HEADLINES';

const initialState = {
  headlines: null,
};

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'news/SET_TOP_HEADLINES': {
      return { ...state, headlines: action.headlines };
    }
    default:
      return state;
  }
};

// Action creators
export const setTopHeadlines = headlines => ({
  type: SET_TOP_HEADLINES,
  headlines: headlines,
});

// Async
export const getTopHeadlines = () => async dispatch => {
  const response = await newsAPI.getTopHeadlines();
  const healinesList = response.articles.map(a => {
    return {
      ...a,
      publishedAt: dateHandler(a.publishedAt),
    };
  });
  dispatch(setTopHeadlines(healinesList));
};
