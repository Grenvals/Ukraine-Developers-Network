import { createSelector } from 'reselect';

// Auth
export const getAuthUserId = state => {
  return state.auth.userId;
};

export const getIsAuth = state => {
  return state.auth.isAuth;
};

export const getAuthProfile = state => {
  return state.auth.profile;
};

// Notifications
export const getNotifications = state => {
  return state.notifications.notifications;
};

export const getNotificationsIsSuspense = state => {
  return state.notifications.isSuspense;
};

// Profile
export const getProfileInfo = state => {
  return state.profilePage.profile;
};

export const getProfileStatus = state => {
  return state.profilePage.status;
};

export const getProfilePosts = state => {
  return state.profilePage.posts;
};

// Users
const getUsersSelector = state => {
  return state.usersPage.users;
};

export const getUsers = createSelector(getUsersSelector, users => {
  return users.filter(u => true);
});

export const getPageSize = state => {
  return state.usersPage.pageSize;
};

export const getTotalUsersCount = state => {
  return state.usersPage.totalUsersCount;
};

export const getCurrentPage = state => {
  return state.usersPage.currentPage;
};

export const getIsLoading = state => {
  return state.usersPage.isLoading;
};

export const getFollowingInProgress = state => {
  return state.usersPage.followingInProgress;
};

export const getPagPortionNumber = state => {
  return state.usersPage.pagPortionNumber;
};

// Dialogs
export const getDialogs = state => {
  return state.dialogsPage.dialogs;
};

// News
export const getNewsHeadlines = state => {
  return state.news.headlines;
};
