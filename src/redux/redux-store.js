import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunkMiddleware from 'redux-thunk';

import { appReducer } from './appReducer';
import { authReducer } from './authReducer';
import { dialogsReducer } from './dialogsReducer';
import { newsReducer } from './newsReducer';
import { notificationReducer } from './notificationReducer';
import { profileReducer } from './profileReducer';
import { sidebarReducer } from './sidebarReducer';
import { usersReducer } from './usersReducer';

const redusers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  sidebar: sidebarReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
  news: newsReducer,
  notifications: notificationReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  redusers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);
