import React from 'react'
// import logo from './logo.svg';
import './App.scss'
import { Route } from 'react-router-dom'
import Header from './componets/Header/Header'
import Profile from './componets/Profile/Profile'
import DialogsContainer from './componets/Dialogs/DialogsContainer'
import News from './componets/News/News'
import Settings from './componets/Settings/Settings'
import SidebarContainer from './componets/Sidebar/SidebarContainer'
import UsersContainer from './componets/Users/UsersContainer'

const App = props => {
  return (
    <div className="app-wrapper">
      <Header />
      <SidebarContainer />
      <div className="content-wrapper">
        <Route path="/profile" render={() => <Profile />} />
        <Route path="/dialogs" render={() => <DialogsContainer />} />
        <Route path="/users" render={() => <UsersContainer />} />
        <Route path="/news" component={News} />
        <Route path="/settings" component={Settings} />
      </div>
    </div>
  )
}

export default App

// ! Розібратися з компонентом Head, налагодити проброс заголовків.
