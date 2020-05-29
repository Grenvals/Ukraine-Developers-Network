import { dialogsAPI } from '../api/api';

const ADD_MESSAGE = 'ADD-MESSAGE';
const SET_DIALOGS_USERS_LIST = 'dialogs/SET_DIALOGS_USERS_LIST';

const initialState = {
  dialogs: [],
  messages: [
    { id: 0, message: 'Good food!' },
    { id: 1, message: 'Please buy the food!' },
  ],
  newDialogMessage: '',
};

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

// Thunks
export const getDialogsUsersList = () => async dispatch => {
  const response = await dialogsAPI.getDialogsUsersList();
  const dialogsList = response.map(u => {
    const date = u.lastUserActivityDate.split('T');
    date[1] = date[1].split('', 5).join('');
    return {
      ...u,
      userName: u.userName.split(/(?=[A-Z])/).join(' '),
      lastUserActivityDate: date.join(' '),
    };
  });
  dispatch(setDialogsUsersList(dialogsList));
};

export const startDialogWithUser = async userId => {
  const response = await dialogsAPI.startDialog(userId);
  if (response.resultCode === 0) {
    console.log('success');
  }
};

export default dialogsReducer;
