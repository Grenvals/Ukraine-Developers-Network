import './index.css'
import * as serviceWorker from './serviceWorker'
import state, { subscribe } from './redux/state'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {
  addPost,
  addMessage,
  updateNewPostMessage,
  updateNewDialogsMessage,
} from './redux/state.js'
import { BrowserRouter } from 'react-router-dom'

let rerenderEntireThree = state => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={state}
        addPost={addPost}
        addMessage={addMessage}
        updateNewPostMessage={updateNewPostMessage}
        updateNewDialogsMessage={updateNewDialogsMessage}
      />{' '}
    </BrowserRouter>,
    document.getElementById('root')
  )
}
rerenderEntireThree(state)
subscribe(rerenderEntireThree) // Подписує subscribe на rerenderEntireThree

serviceWorker.unregister()
