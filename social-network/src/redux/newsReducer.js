import { dateHandler } from '../utils/handlers/handlers';
import { newsAPI } from '../api/api';

// Actions
const SET_TOP_HEADLINES = 'news/SET_TOP_HEADLINES';
const SET_NEWS_ARTICLES = 'news/SET_NEWS_ARTICLES';
const SET_CURRENT_CATEGORY = 'news/SET_CURRENT_CATEGORY';
const SET_PAGE_SIZE = 'news/SET_PAGE_SIZE';

const initialState = {
  headlines: null,
  articles: null,
  totalResults: null,
  currentPage: 1,
  pageSize: 18,
  currentCategory: 'technology',
  categoryList: [
    'business',
    'entertainment',
    'technology',
    'general',
    'health',
    'science',
    'sports',
  ],
};

export const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'news/SET_TOP_HEADLINES': {
      return { ...state, headlines: action.headlines };
    }
    case 'news/SET_NEWS_ARTICLES': {
      return { ...state, articles: action.articles };
    }
    case 'news/SET_CURRENT_CATEGORY': {
      return { ...state, currentCategory: action.currentCategory };
    }
    case 'news/SET_PAGE_SIZE': {
      return { ...state, pageSize: action.pageSize };
    }
    default:
      return state;
  }
};

// Action creators
export const setTopHeadlines = headlines => ({
  type: SET_TOP_HEADLINES,
  headlines,
});
export const setNewsArticles = articles => ({
  type: SET_NEWS_ARTICLES,
  articles,
});
export const setCurrentCategory = currentCategory => ({
  type: SET_CURRENT_CATEGORY,
  currentCategory,
});
export const setPageSize = pageSize => ({
  type: SET_PAGE_SIZE,
  pageSize,
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

export const getNewsArticles = (category, pageSize, currentPage) => async dispatch => {
  dispatch(setNewsArticles(null));
  const response = await newsAPI.getNews(category, pageSize, currentPage);
  const newsList = response.articles.map(a => {
    return {
      ...a,
      publishedAt: dateHandler(a.publishedAt),
    };
  });
  dispatch(setNewsArticles(newsList));
};
