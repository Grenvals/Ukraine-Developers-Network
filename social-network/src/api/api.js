import * as axios from 'axios';

const instanse = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '8fc471c4-748c-4bc5-bda6-3ac04c8f38c0', // General
    // 'API-KEY': '12b67446-7c55-4a5c-842b-1e8e1fa4adf5', // Alex Chicago
    // 'API-KEY': '27dca8c2-5064-4ee7-80d6-ba4f1d4449de', // Artem Demin
    // 'API-KEY': '9f2f55ef-fa5c-4c8a-993f-090bae48ac1f', //  Eduardo Saverin
    // 'API-KEY': '94b1e093-e969-4288-8857-a0aa0ea49407', //  GunsNRoses
  },
});

const newsInstanse = axios.create({
  baseURL: 'https://newsapi.org/v2/',
});
const newsApiKey = '&apiKey=08ec5abbba254b49a6288d68358823ba';

export const authAPI = {
  getAuthUserData: () => {
    return instanse.get(`auth/me`, {});
  },
  logIn: (userEmail, userPassword, userRemember, captcha = null) => {
    return instanse
      .post(`auth/login`, {
        email: userEmail,
        password: userPassword,
        rememberMe: userRemember,
        captcha: captcha,
      })
      .then(response => response.data);
  },
  logOut: () => {
    return instanse.delete(`auth/login`, {}).then(response => response.data);
  },
};
export const securityAPI = {
  getCaptchaUrl: () => {
    return instanse.get(`security/get-captcha-url`, {});
  },
};

export const usersAPI = {
  getUsers: (currentPage = 1, pageSize = 10) => {
    return instanse
      .get(`users?page=${currentPage}&count=${pageSize}`, {})
      .then(response => response.data);
  },
  followUser: userId => {
    return instanse.post(`follow/${userId}`, {}).then(response => response.data);
  },
  unfollowUser: userId => {
    return instanse.delete(`follow/${userId}`, {}).then(response => response.data);
  },
  getProfile: userId => {
    console.log('api is old, please use profileAPI()');
    return profileAPI.getProfile(userId);
  },
};

export const dialogsAPI = {
  startDialogWithUser: userId => {
    return instanse.put(`dialogs/` + userId, {}).then(response => response.data);
  },
  getDialogsUsersList: () => {
    return instanse.get(`dialogs/`, {}).then(response => response.data);
  },
  getDialogMessagesList: userId => {
    return instanse
      .get(`dialogs/` + userId + `/messages`, {})
      .then(response => response.data);
  },
  sendMessage: (userId, message) => {
    return instanse
      .post(`dialogs/` + userId + `/messages`, {
        body: message,
      })
      .then(response => response.data);
  },
};

export const profileAPI = {
  getProfile: userId => {
    return instanse.get(`profile/` + userId, {}).then(response => response.data);
  },
  getStatus: userId => {
    return instanse.get(`profile/status/` + userId, {}).then(response => response.data);
  },
  updateStatus: status => {
    return instanse
      .put(`profile/status/`, {
        status: status,
      })
      .then(response => response.data);
  },
  updateUserPhoto: data => {
    const formData = new FormData();
    formData.append('image', data);
    return instanse
      .put(`profile/photo/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(response => response.data);
  },
  updateProfile: profile => {
    return instanse.put(`profile/`, profile).then(response => response.data);
  },
};

export const newsAPI = {
  getTopHeadlines: () => {
    return newsInstanse
      .get(`top-headlines?country=ua&category=technology` + newsApiKey, {})
      .then(response => response.data);
  },
  getNews: (category, pageSize, currentPage) => {
    return newsInstanse
      .get(
        `top-headlines?country=ua&category=` +
          category +
          '&pageSize=' +
          pageSize +
          '&page=' +
          currentPage +
          newsApiKey,
        {}
      )
      .then(response => response.data);
  },
};
