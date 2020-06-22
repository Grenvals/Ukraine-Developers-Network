import { newsAPI } from '../api/api';
import { dateHandler } from '../utils/handlers/handlers';
import { setSuspenseStatus, setNotification } from './notificationReducer';

// Actions
const SET_TOP_HEADLINES = 'news/SET_TOP_HEADLINES';
const SET_CURRENT_CATEGORY = 'news/SET_CURRENT_CATEGORY';
const SET_NEWS_ARTICLES = 'news/SET_NEWS_ARTICLES';
const SET_TOTAL_RESULTS = 'news/SET_TOTAL_RESULTS';
const SET_PAGE_SIZE = 'news/SET_PAGE_SIZE';
const SET_CURRENT_PAGE = 'news/SET_CURRENT_PAGE';
const SET_PUG_PORTION_NUMBER = 'news/SET_PUG_PORTION_NUMBER';
const SET_NEWS_ERROR = 'news/SET_NEWS_ERROR';

const initialState = {
  headlines: null,
  articles: null,
  totalResults: null,
  currentPage: 1,
  pagPortionNumber: 1,
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
  error: null,
};

// Reducer
const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'news/SET_TOP_HEADLINES': {
      return { ...state, headlines: action.headlines, error: null };
    }
    case 'news/SET_NEWS_ARTICLES': {
      return { ...state, articles: action.articles, error: null };
    }
    case 'news/SET_CURRENT_CATEGORY': {
      return { ...state, currentPage: 1, currentCategory: action.currentCategory };
    }
    case 'news/SET_TOTAL_RESULTS': {
      return { ...state, totalResults: action.totalResults };
    }
    case 'news/SET_PAGE_SIZE': {
      return { ...state, pageSize: action.pageSize };
    }
    case 'news/SET_CURRENT_PAGE': {
      return {
        ...state,
        currentPage: action.currentPage,
      };
    }
    case 'news/SET_PUG_PORTION_NUMBER': {
      return {
        ...state,
        pagPortionNumber: action.pagPortionNumber,
      };
    }
    case 'news/SET_NEWS_ERROR': {
      return { ...state, error: action.error };
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

export const setTotalResults = totalResults => ({
  type: SET_TOTAL_RESULTS,
  totalResults,
});

export const setPageSize = pageSize => ({
  type: SET_PAGE_SIZE,
  pageSize,
});

export const setCurrentPage = currentPage => ({
  type: SET_CURRENT_PAGE,
  currentPage: currentPage,
});

export const setPagPortionNumber = pagPortionNumber => ({
  type: SET_PUG_PORTION_NUMBER,
  pagPortionNumber,
});

export const setNewsError = error => ({
  type: SET_NEWS_ERROR,
  error,
});

// Async
export const getTopHeadlines = () => async dispatch => {
  dispatch(setSuspenseStatus(true));
  try {
    const response = await newsAPI.getTopHeadlines();
    const healinesList = response.articles.map(a => {
      return {
        ...a,
        publishedAt: dateHandler(a.publishedAt),
      };
    });
    dispatch(setTopHeadlines(healinesList));
  } catch (error) {
    dispatch(setNotification('Google News ' + error.message, true));
    dispatch(setNewsError('Google News ' + error, true));
  } finally {
    dispatch(setSuspenseStatus(false));
  }
};

export const getNewsArticles = (category, pageSize, currentPage) => async dispatch => {
  dispatch(setNewsArticles(null));
  dispatch(setSuspenseStatus(true));
  try {
    const response = await newsAPI.getNews(category, pageSize, currentPage);
    const newsList = response.articles.map(a => {
      return {
        ...a,
        publishedAt: dateHandler(a.publishedAt),
      };
    });
    dispatch(setNewsArticles(newsList));
    dispatch(setTotalResults(response.totalResults));
    dispatch(setCurrentPage(currentPage));
  } catch (error) {
    dispatch(setNotification('Google News: ' + error.message, true));
    dispatch(setNewsError('Google News: ' + error.message, true));
  } finally {
    dispatch(setSuspenseStatus(false));
  }
};

export { newsReducer };
