import { getAuthUserData } from './authReducer'

const INITIALIZED_SUCSESS = 'INITIALIZED_SUCSESS'

let initialState = {
  initialized: false,
}

let appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INITIALIZED_SUCSESS': {
      return {
        ...state,
        initialized: true,
      }
    }
    default:
      return state
  }
}

export const initializedSuccess = () => {
  return {
    type: INITIALIZED_SUCSESS,
  }
}

export const initializedApp = () => dispatch => {
  let promise = dispatch(getAuthUserData())

  // Promise.all([promise1, promise2, promise3]).then(() => {})

  promise.then(() => {
    dispatch(initializedSuccess())
  })
}

export default appReducer
