import { usersAPI } from '../api/api';
import { updateObjectInArray } from '../utils/object-helper';
import { setNotification, setSuspenseStatus } from './notificationReducer';

const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET_USERS';
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
const SET_PUG_PORTION_NUMBER = 'users/SET_PUG_PORTION_NUMBER';
const SET_PAGE_SIZE = 'users/SET_PAGE_SIZE';
const SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT';
const SET_LOADING_STATUS = 'users/SET_LOADING_STATUS';
const TOOGLE_FOLLOWNG_PROGRESS = 'users/TOOGLE_FOLLOWNG_PROGRESS';

let initialState = {
  users: [],
  pageSize: 25,
  totalUsersCount: null,
  currentPage: 1,
  pagPortionNumber: 2,
  isLoading: true,
  followingInProgress: [],
};

let usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'users/FOLLOW': {
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userID, 'id', {
          followed: true,
        }),
      };
    }
    case 'users/UNFOLLOW': {
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userID, 'id', {
          followed: false,
        }),
      };
    }
    case 'users/SET_USERS': {
      return {
        ...state,
        users: action.users,
      };
    }
    case 'users/SET_CURRENT_PAGE': {
      return {
        ...state,
        currentPage: action.currentPage,
      };
    }
    case 'users/SET_PUG_PORTION_NUMBER': {
      return {
        ...state,
        pagPortionNumber: action.pagPortionNumber,
      };
    }
    case 'users/SET_PAGE_SIZE': {
      return {
        ...state,
        pageSize: action.pageSize,
      };
    }
    case 'users/SET_TOTAL_USERS_COUNT': {
      return {
        ...state,
        totalUsersCount: action.count,
      };
    }
    case 'users/SET_LOADING_STATUS': {
      return {
        ...state,
        isLoading: action.loading,
      };
    }
    case 'users/TOOGLE_FOLLOWNG_PROGRESS': {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : [...state.followingInProgress.filter(id => id !== action.userId)],
      };
    }
    default:
      return state;
  }
};

// AC
export const follow = userID => ({
  type: FOLLOW,
  userID,
});
export const unfollow = userID => {
  return {
    type: UNFOLLOW,
    userID,
  };
};
export const setUsers = users => ({
  type: SET_USERS,
  users,
});
export const setCurrentPage = currentPage => ({
  type: SET_CURRENT_PAGE,
  currentPage: currentPage,
});
export const setPagPortionNumber = pagPortionNumber => ({
  type: SET_PUG_PORTION_NUMBER,
  pagPortionNumber,
});
export const setPageSize = pageSize => ({
  type: SET_PAGE_SIZE,
  pageSize,
});
export const setTotalUsersCount = totalUsersCount => ({
  type: SET_TOTAL_USERS_COUNT,
  count: totalUsersCount,
});
export const setLoadingStatus = loadingStatus => ({
  type: SET_LOADING_STATUS,
  loading: loadingStatus,
});
export const toogleFollowingProgress = (userId, isFetching) => ({
  type: TOOGLE_FOLLOWNG_PROGRESS,
  userId: userId,
  isFetching: isFetching,
});

// Thunks
export const getRequestUsers = (currentPage, pageSize) => async dispatch => {
  dispatch(setLoadingStatus(true));
  const response = await usersAPI.getUsers(currentPage, pageSize);
  dispatch(setUsers(response.items));
  dispatch(setTotalUsersCount(response.totalCount));
  dispatch(setLoadingStatus(false));
};

export const getTotalUsersCount = () => async dispatch => {
  const response = await usersAPI.getUsers(1, 5);
  dispatch(setTotalUsersCount(response.totalCount));
};

export const updatePageSize = pageSize => async dispatch => {
  dispatch(setSuspenseStatus(true));
  dispatch(setPageSize(pageSize));
  await dispatch(getRequestUsers(1, pageSize));
  dispatch(setSuspenseStatus(false));
};

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
  dispatch(setSuspenseStatus(true));
  dispatch(toogleFollowingProgress(userId, true));
  const response = await apiMethod(userId);
  dispatch(setSuspenseStatus(false));
  if (response.resultCode === 0) {
    dispatch(actionCreator(userId));
    dispatch(setNotification('Server: action saved'));
  } else {
    dispatch(setNotification('Error on server'));
  }
  dispatch(toogleFollowingProgress(userId, false));
};

export const followUser = userId => dispatch => {
  followUnfollowFlow(dispatch, userId, usersAPI.followUser.bind(usersAPI), follow);
};

export const unfollowUser = userId => dispatch => {
  followUnfollowFlow(dispatch, userId, usersAPI.unfollowUser.bind(usersAPI), unfollow);
};

export { usersReducer };
