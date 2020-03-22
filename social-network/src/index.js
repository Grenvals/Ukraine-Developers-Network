import './index.css'
import * as serviceWorker from './serviceWorker'
import store from './redux/redux-store'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import StoreContext from './redux/context-store'

let rerenderEntireThree = state => {
  ReactDOM.render(
    <BrowserRouter>
      <StoreContext.Provider value={store}>
        <App />
      </StoreContext.Provider>
    </BrowserRouter>,
    document.getElementById('root')
  )
}
rerenderEntireThree(store.getState())
store.subscribe(() => {
  let state = store.getState()
  rerenderEntireThree(state)
}) // Подписує subscribe на rerenderEntireThree

serviceWorker.unregister()
