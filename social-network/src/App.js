import React from 'react'
// import logo from './logo.svg';
import './App.scss'
import { Route, BrowserRouter } from 'react-router-dom'
import Header from './componets/Header/Header'
import Profile from './componets/Profile/Profile'
import Dialogs from './componets/Dialogs/Dialogs'
import News from './componets/News/News'
import Music from './componets/Music/Music'
import Settings from './componets/Settings/Settings'
import Sidebar from './componets/Sidebar/Sidebar'

const App = props => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Sidebar state={props.state} />
        <div className="content-wrapper">
          <Route
            path="/profile"
            render={() => (
              <Profile state={props.state} addPost={props.addPost} />
            )}
          />
          <Route
            path="/dialogs"
            render={() => <Dialogs state={props.state} />}
          />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
