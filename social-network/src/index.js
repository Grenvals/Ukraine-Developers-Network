import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

let posts = [
  { id: 1, message: 'Hi, how are you?', likes: 11 },
  { id: 2, message: 'You can do it!', likes: 22 },
  { id: 3, message: 'Lets study React', likes: 5 },
]

let dialogs = [
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
]

let messages = [
  { id: 1, lastMessage: 'Good food!' },
  { id: 2, lastMessage: 'Please buy the food!' },
]

ReactDOM.render(
  <App dialogs={dialogs} messages={messages} posts={posts} />,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
