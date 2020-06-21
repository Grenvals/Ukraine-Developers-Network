import { dialogsAPI } from '../api/api';
import { dateHandler, stringSpaceHandler } from '../utils/handlers/handlers';
import { setNotification, setSuspenseStatus } from './notificationReducer';

// Actions
const ADD_MESSAGE = 'ADD-MESSAGE';
const SET_DIALOGS_USERS_LIST = 'dialogs/SET_DIALOGS_USERS_LIST';
const SET_DIALOG_MESSAGES = 'dialogs/SET_DIALOG_MESSAGES';

const initialState = {
  dialogs: null,
  messages: null,
  newDialogMessage: '',
};

// Reducer
const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD-MESSAGE': {
      let newMessage = {
        id: 5,
        message: action.message,
      };
      return {
        ...state,
        newDialogMessage: '',
        messages: [...state.messages, newMessage],
      };
    }
    case 'dialogs/SET_DIALOGS_USERS_LIST': {
      return { ...state, dialogs: action.usersList };
    }
    case 'dialogs/SET_DIALOG_MESSAGES': {
      return { ...state, messages: action.messages };
    }
    default:
      return state;
  }
};

// Action creators
export const addMessage = message => ({
  type: ADD_MESSAGE,
  message: message,
});

export const setDialogsUsersList = usersList => ({
  type: SET_DIALOGS_USERS_LIST,
  usersList: usersList,
});

export const setDialogMessages = messages => ({
  type: SET_DIALOG_MESSAGES,
  messages: messages,
});

// Async
export const getDialogsUsersList = () => async dispatch => {
  dispatch(setSuspenseStatus(true));
  try {
    const response = await dialogsAPI.getDialogsUsersList();
    const dialogsList = response.map(u => {
      return {
        ...u,
        userName: stringSpaceHandler(u.userName),
        lastUserActivityDate: dateHandler(u.lastUserActivityDate),
      };
    });
    dispatch(setDialogsUsersList(dialogsList));
  } catch (error) {
    dispatch(setNotification('Server: ' + error.message, true));
  } finally {
    dispatch(setSuspenseStatus(false));
  }
};

export const getDialogMessages = userId => async dispatch => {
  dispatch(setDialogMessages(null));
  dispatch(setSuspenseStatus(true));
  try {
    const response = await dialogsAPI.getDialogMessagesList(userId);
    const messages = response.items.map(u => {
      return {
        ...u,
        addedAt: dateHandler(u.addedAt),
      };
    });
    dispatch(setDialogMessages(messages));
  } catch (error) {
    dispatch(setNotification('Server: ' + error.message, true));
  } finally {
    dispatch(setSuspenseStatus(false));
  }
};

export const sendMessage = (userId, message) => async dispatch => {
  dispatch(setSuspenseStatus(true));
  try {
    const response = await dialogsAPI.sendMessage(userId, message);
    if (response.resultCode === 0) {
      dispatch(getDialogMessages(userId));
      dispatch(
        setNotification('Server: message sent to ' + response.data.message.recipientName)
      );
    }
  } catch (error) {
    dispatch(setNotification('Server: ' + error.message, true));
  } finally {
    dispatch(setSuspenseStatus(false));
  }
};

export const startDialogWithUser = userId => async dispatch => {
  dispatch(setSuspenseStatus(true));
  try {
    await dialogsAPI.startDialogWithUser(userId);
  } catch (error) {
    dispatch(setNotification('Server: ' + error.message, true));
  } finally {
    dispatch(setSuspenseStatus(false));
  }
};

export const openDialogWithUser = userId => async dispatch => {
  await dispatch(getDialogsUsersList());
  dispatch(getDialogMessages(userId));
};

export { dialogsReducer };
