import React from 'react'
// import logo from './logo.svg';
import './App.scss'
import { Route } from 'react-router-dom'
import Header from './componets/Header/Header'
import Profile from './componets/Profile/Profile'
import DialogsContainer from './componets/Dialogs/DialogsContainer'
import News from './componets/News/News'
import Music from './componets/Music/Music'
import Settings from './componets/Settings/Settings'
import Sidebar from './componets/Sidebar/Sidebar'

const App = props => {
  return (
    <div className="app-wrapper">
      <Header />
      <Sidebar />
      <div className="content-wrapper">
        <Route path="/profile" render={() => <Profile />} />
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />
      </div>
    </div>
  )
}

export default App
