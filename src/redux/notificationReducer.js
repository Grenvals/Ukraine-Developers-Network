// Actions
const ADD_NOTIFICATION = 'notifications/ADD_NOTIFICATION';
const DELETE_NOTIFICATION = 'notifications/DELETE_NOTIFICATION';
const SET_SUSPENSE_STATUS = 'notifications/SET_SUSPENSE_STATUS';

const initialState = {
  isSuspense: false,
  notifications: [],
};

// Reducer
const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'notifications/ADD_NOTIFICATION': {
      const newNotification = {
        id: action.id,
        message: action.message,
        error: action.error,
      };
      return { ...state, notifications: [...state.notifications, newNotification] };
    }
    case 'notifications/DELETE_NOTIFICATION': {
      return {
        ...state,
        notifications: state.notifications.filter(n => n.id !== action.id),
      };
    }
    case 'notifications/SET_SUSPENSE_STATUS': {
      return {
        ...state,
        isSuspense: action.isSuspense,
      };
    }
    default:
      return state;
  }
};

// Action creators
const addNotification = (id, message, error) => ({
  type: ADD_NOTIFICATION,
  id,
  message,
  error,
});

const deleteNotification = id => ({
  type: DELETE_NOTIFICATION,
  id,
});

export const setSuspenseStatus = isSuspense => ({
  type: SET_SUSPENSE_STATUS,
  isSuspense,
});

// Async
export const setNotification = (message, error = false) => dispatch => {
  const notificationId = `f${(+new Date()).toString(16)}`;
  dispatch(addNotification(notificationId, message, error));
  setTimeout(() => {
    dispatch(deleteNotification(notificationId));
  }, 6000);
};
export { notificationReducer };
