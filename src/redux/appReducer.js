import { getAuthUserData } from './authReducer';
import { getDialogsUsersList } from './dialogsReducer';
import { getTopHeadlines } from './newsReducer';
import { getTotalUsersCount } from './usersReducer';

// Actions
const INITIALIZED_SUCSESS = 'INITIALIZED_SUCSESS';

const initialState = {
  initialized: false,
};

// Reducer
const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INITIALIZED_SUCSESS': {
      return {
        ...state,
        initialized: true,
      };
    }
    default:
      return state;
  }
};

// Action creators
export const initializedSuccess = () => {
  return {
    type: INITIALIZED_SUCSESS,
  };
};

// Async
export const initializedApp = () => (dispatch, getState) => {
  const getUserData = dispatch(getAuthUserData());
  Promise.all([getUserData]).then(response => {
    let isAuth = getState().auth.isAuth;
    dispatch(initializedSuccess());
    if (isAuth) {
      dispatch(getDialogsUsersList());
    }
    dispatch(getTopHeadlines());
    dispatch(getTotalUsersCount());
    // Watchers
    setInterval(() => {
      isAuth = getState().auth.isAuth;
      if (isAuth) {
        dispatch(getDialogsUsersList());
      }
    }, 25000);
    setInterval(() => {
      dispatch(getTopHeadlines());
    }, 150000);
  });
};

export { appReducer };
