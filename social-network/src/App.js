import React from 'react'
// import logo from './logo.svg';
import './App.scss'
import { Route } from 'react-router-dom'
import DialogsContainer from './componets/Dialogs/DialogsContainer'
import News from './componets/News/News'
import Settings from './componets/Settings/Settings'
import SidebarContainer from './componets/Sidebar/SidebarContainer'
import UsersContainer from './componets/Users/UsersContainer'
import ProfileContainer from './componets/Profile/ProfileContainer'
import HeaderContainer from './componets/Header/HeaderContainer'

const App = props => {
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <SidebarContainer />
      <div className="content-wrapper">
        <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
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
// ! Переписати на класові компоненти(user итд).
// ! Доробити функционал. Ajax, отримати профайл користувача в auth
// ! Добавити можливість follow/unfollow в profile
// ! Вспливашка при запросі follow/unfollow
