import './index.css'
import * as serviceWorker from './serviceWorker'
import state, { subscribe } from './redux/state'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { addPost, updateNewPostMessage } from './redux/state.js'
import { BrowserRouter } from 'react-router-dom'

let rerenderEntireThree = state => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={state}
        addPost={addPost}
        updateNewPostMessage={updateNewPostMessage}
      />{' '}
    </BrowserRouter>,
    document.getElementById('root')
  )
}
rerenderEntireThree(state)
subscribe(rerenderEntireThree) // Подписує subscribe на rerenderEntireThree

serviceWorker.unregister()
