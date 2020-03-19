let initialState = {
  friends: [
    { id: 1, name: 'Ihor', messagesCount: 2 },
    { id: 1, name: 'Anton', messagesCount: 5 },
    { id: 1, name: 'Nicolas', messagesCount: 1 },
    { id: 1, name: 'Garold', messagesCount: 10 },
  ],
}

let sidebarReducer = (state = initialState, action) => {
  return state
}
export default sidebarReducer
