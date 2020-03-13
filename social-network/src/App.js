import React from 'react'
// import logo from './logo.svg';
import './App.scss'
import { Route } from 'react-router-dom'
import Header from './componets/Header/Header'
import Profile from './componets/Profile/Profile'
import Dialogs from './componets/Dialogs/Dialogs'
import News from './componets/News/News'
import Music from './componets/Music/Music'
import Settings from './componets/Settings/Settings'
import Sidebar from './componets/Sidebar/Sidebar'

const App = props => {
  return (
    <div className="app-wrapper">
      <Header />
      <Sidebar state={props.state.sidebar} />
      <div className="content-wrapper">
        <Route
          path="/profile"
          render={() => (
            <Profile
              state={props.state.profilePage}
              addPost={props.addPost}
              updateNewPostMessage={props.updateNewPostMessage}
            />
          )}
        />
        <Route
          path="/dialogs"
          render={() => <Dialogs state={props.state.dialogsPage} />}
        />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />
      </div>
    </div>
  )
}

export default App
