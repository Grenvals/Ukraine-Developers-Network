import React from 'react'
// import logo from './logo.svg';
import './App.scss'
import { Route, withRouter } from 'react-router-dom'
import DialogsContainer from './componets/Dialogs/DialogsContainer'
import News from './componets/News/News'
import Settings from './componets/Settings/Settings'
import SidebarContainer from './componets/Sidebar/SidebarContainer'
import UsersContainer from './componets/Users/UsersContainer'
import ProfileContainer from './componets/Profile/ProfileContainer'
import HeaderContainer from './componets/Header/HeaderContainer'
import Login from './componets/Login/News/Login'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { initializedApp } from './redux/appReducer'
import Preloader from './componets/common/Preloader/Preloader'

class App extends React.Component {
  componentDidMount() {
    this.props.initializedApp()
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <SidebarContainer />
        <div className="content-wrapper">
          <Route path="/login" render={() => <Login />} />
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/news" component={News} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    )
  }
}

let mapStateToProps = state => {
  return {
    initialized: state.app.initialized,
  }
}
export default compose(
  connect(mapStateToProps, { initializedApp }),
  withRouter
)(App)

// ! Розібратися з компонентом Head, налагодити проброс заголовків.
// ! Переписати на класові компоненти(user итд).
// ! Доробити функционал. Ajax, отримати профайл користувача в auth
// ! Добавити можливість follow/unfollow в profile
// ! Вспливашка при запросі follow/unfollow
// ! Распознавание голоса и превращение в текст, либо рукописного ввода js
// ! Добавити функціонал кількості користувачів на сторінці 5,10,15, загальна кількість користувачів
// ! Виправити в api getProfile перенести окремо із usersAPI
// ! Винести кнопку, чекбокс в окремий компонент
// ! Пропрацювати анімацію і ефекти.
// ! Сделать плеэр на сайт, музыка "intro the xx"
// ! Авторизация через google sight in
// ! Налаштувати валідацію
// ! Підправити структуру форми login (на прикладі ChatMessageForm)
// ! Розібратися з лейблами для форм
// ! Todo list на react, счетчик
