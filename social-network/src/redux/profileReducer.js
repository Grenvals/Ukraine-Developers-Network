import { stopSubmit } from 'redux-form';

import { profileAPI, usersAPI } from '../api/api';
import postImage3 from '../assets/images/profile/posts/P1013597.JPG';
import postImage2 from '../assets/images/profile/posts/P10рр132.JPG';
import postImage1 from '../assets/images/profile/posts/jobs-1.jpg';
import { getAuthUserProfile } from './authReducer';
import { setNotification, setSuspenseStatus } from './notificationReducer';

// jobs-1
const ADD_POST = 'profile/ADD-POST';
const DELETE_POST = 'profile/DELETE-POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_USER_STATUS = 'profile/SET_USER_STATUS';
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS';

const initialState = {
  profile: null,
  posts: [
    {
      id: 1,
      message:
        'Have the courage to follow your heart and intuition. They somehow already know what you truly want to become. Everything else is secondary.',
      date: '11.05.2020',
      image: postImage1,
      likes: 11,
    },
    {
      id: 2,
      message:
        'Sometimes when you innovate, you make mistakes. It is best to admit them quickly, and get on with improving your other innovations.',
      date: '15.05.2020',
      image: postImage2,
      likes: 22,
    },
    {
      id: 3,
      message:
        'Sometimes when you innovate, you make mistakes. It is best to admit them quickly, and get on with improving your other innovations.',
      date: '27.05.2020',
      image: postImage3,
      likes: 5,
    },
  ],
  newPostMessage: '',
  status: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'profile/ADD-POST': {
      let newPost = {
        id: state.posts.length + 1,
        message: action.message,
        date: action.date,
        likes: 0,
      };
      return { ...state, newPostMessage: '', posts: [...state.posts, newPost] };
    }
    case 'profile/DELETE-POST': {
      return {
        ...state,
        posts: state.posts.filter(p => p.id !== action.id),
      };
    }
    case 'profile/SET_USER_PROFILE': {
      return { ...state, profile: action.profile };
    }
    case 'profile/SAVE_PHOTO_SUCCESS': {
      return { ...state, profile: { ...state.profile, photos: action.userPhoto } };
    }
    case 'profile/SET_USER_STATUS': {
      return { ...state, status: action.status };
    }
    default:
      return state;
  }
};

export const addPostActionCreator = (message, date) => ({
  type: ADD_POST,
  message: message,
  date: date,
});
export const deletePostActionCreator = id => ({
  type: DELETE_POST,
  id: id,
});
export const setUserProfile = profile => ({
  type: SET_USER_PROFILE,
  profile,
});
export const setUserStatus = status => ({
  type: SET_USER_STATUS,
  status,
});

export const saveFotoSuccess = data => ({
  type: SAVE_PHOTO_SUCCESS,
  userPhoto: data,
});

export const getUserProfile = userId => async dispatch => {
  dispatch(setSuspenseStatus(true));
  dispatch(setUserProfile(null));
  let response = await usersAPI.getProfile(userId);
  dispatch(setUserProfile(response));
  dispatch(setSuspenseStatus(false));
};

export const updateUserProfile = (userId, formData) => async dispatch => {
  dispatch(setSuspenseStatus(true));
  let response = await profileAPI.updateProfile(formData);
  dispatch(setSuspenseStatus(false));
  if (response.resultCode === 0) {
    dispatch(getUserProfile(userId));
    dispatch(getAuthUserProfile(userId));
    dispatch(setNotification('Server: profile updated'));
  } else {
    let key = response.messages[0].match(/Contacts->(\w+)/)[1].toLowerCase();
    dispatch(
      stopSubmit('userProfile', {
        contacts: { [key]: response.messages[0] },
      })
    );
  }
};

export const getUserStatus = userId => async dispatch => {
  let response = await profileAPI.getStatus(userId);
  dispatch(setUserStatus(response));
};

export const updateUserStatus = status => async dispatch => {
  dispatch(setSuspenseStatus(true));
  let response = await profileAPI.updateStatus(status);
  dispatch(setSuspenseStatus(false));
  if (response.resultCode === 0) {
    dispatch(setUserStatus(status));
    dispatch(setNotification('Server: status updated'));
  }
};

export const updateUserPhoto = (data, id) => async dispatch => {
  dispatch(setSuspenseStatus(true));
  let response = await profileAPI.updateUserPhoto(data);
  dispatch(setSuspenseStatus(false));
  if (response.resultCode === 0) {
    dispatch(saveFotoSuccess(response.data.photos));
    dispatch(getAuthUserProfile(id));
    dispatch(setNotification('Server: user photo updated'));
  }
};

export { profileReducer };
