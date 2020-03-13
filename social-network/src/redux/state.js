let state = {
  dialogsPage: {
    dialogs: [
      {
        id: 1,
        userName: 'Anton Demin',
        messageCount: 4,
        lastMessage: 'Great, I’ll see you tomorrow!...',
      },
      {
        id: 2,
        userName: 'Alexander Dmitriew',
        messageCount: 5,
        lastMessage: 'Great, I’ll see you tomorrow!...',
      },
      {
        id: 3,
        userName: 'Nicolas Volodin',
        messageCount: 2,
        lastMessage: 'Hi Elaine! I have a question...',
      },
      {
        id: 4,
        userName: 'Garold Insbruck',
        messageCount: 1,
        lastMessage: 'Great, I’ll see you tomorrow!...',
      },
    ],
    messages: [
      { id: 1, message: 'Good food!' },
      { id: 2, message: 'Please buy the food!' },
    ],
    newDialogMessage: '',
  },
  profilePage: {
    posts: [
      { id: 1, message: 'Hi, how are you?', likes: 11 },
      { id: 2, message: 'You can do it!', likes: 22 },
      { id: 3, message: 'Lets study React', likes: 5 },
    ],
    newPostMessage: 'Write your message',
  },
  sidebar: {
    friends: [
      { id: 1, name: 'Ihor', messagesCount: 2 },
      { id: 1, name: 'Anton', messagesCount: 5 },
      { id: 1, name: 'Nicolas', messagesCount: 1 },
      { id: 1, name: 'Garold', messagesCount: 10 },
    ],
  },
}

let rerenderEntireThree = state => {
  console.log('state changed')
}

export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostMessage,
    likes: 0,
  }
  state.profilePage.posts.push(newPost)
  state.profilePage.newPostMessage = ''
  rerenderEntireThree(state)
}
export let addMessage = () => {
  let newMessage = {
    id: 5,
    message: state.dialogsPage.newDialogMessage,
  }
  state.dialogsPage.messages.push(newMessage)
  state.dialogsPage.newDialogMessage = ''
  rerenderEntireThree(state)
}

export const updateNewPostMessage = newMessage => {
  state.profilePage.newPostMessage = newMessage
  rerenderEntireThree(state)
}

export const updateNewDialogsMessage = newMessage => {
  state.dialogsPage.newDialogMessage = newMessage
  rerenderEntireThree(state)
}

export const subscribe = observer => {
  rerenderEntireThree = observer // Паттерн наблюдатель, observer // publisher-subscribe (eddEventListener)
}

export default state
