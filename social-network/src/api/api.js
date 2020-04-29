import * as axios from 'axios'

const instanse = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '8fc471c4-748c-4bc5-bda6-3ac04c8f38c0',
  },
})

export const authAPI = {
  getAuthUserData: () => {
    return instanse.get(`auth/me`, {})
  },
  logIn: (userEmail, userPassword, userRemember) => {
    return instanse
      .post(`auth/login`, {
        email: userEmail,
        password: userPassword,
        rememberMe: userRemember,
      })
      .then(response => response.data)
  },
}

export const usersAPI = {
  getUsers: (currentPage = 1, pageSize = 10) => {
    return instanse
      .get(`users?page=${currentPage}&count=${pageSize}`, {})
      .then(response => response.data)
  },
  followUser: userId => {
    return instanse.post(`follow/${userId}`, {}).then(response => response.data)
  },
  unfollowUser: userId => {
    return instanse
      .delete(`follow/${userId}`, {})
      .then(response => response.data)
  },
  getProfile: userId => {
    console.log('api is old, please use profileAPI()')
    return profileAPI.getProfile(userId)
  },
}

export const profileAPI = {
  getProfile: userId => {
    return instanse.get(`profile/` + userId, {}).then(response => response.data)
  },
  getStatus: userId => {
    return instanse
      .get(`profile/status/` + userId, {})
      .then(response => response.data)
  },
  updateStatus: status => {
    return instanse
      .put(`profile/status/`, {
        status: status,
      })
      .then(response => response.data)
  },
}

// axios
// .get(
// 	'https://newsapi.org/v2/top-headlines?country=ua&category=technology&apiKey=08ec5abbba254b49a6288d68358823ba'
// )
