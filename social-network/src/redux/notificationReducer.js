const ADD_NOTIFICATION = 'notifications/ADD_NOTIFICATION';
const DELETE_NOTIFICATION = 'notifications/DELETE_NOTIFICATION';
const SET_SUSPENSE_STATUS = 'notifications/SET_SUSPENSE_STATUS';

let initialState = {
  isSuspense: false,
  notifications: [],
};

export let notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'notifications/ADD_NOTIFICATION': {
      let newNotification = {
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

export const addNotification = (id, message, error) => ({
  type: ADD_NOTIFICATION,
  id,
  message,
  error,
});

export const deleteNotification = id => ({
  type: DELETE_NOTIFICATION,
  id: id,
});

export const setSuspenseStatus = isSuspense => ({
  type: SET_SUSPENSE_STATUS,
  isSuspense,
});

export const setNotification = (message, error = false) => (dispatch, getState) => {
  const notificationId = getState().notifications.notifications.length + 1;
  dispatch(addNotification(notificationId, message, error));
  setTimeout(() => {
    dispatch(deleteNotification(notificationId));
  }, 6000);
};
