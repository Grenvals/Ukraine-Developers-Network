import 'react-perfect-scrollbar/dist/css/styles.css';

import { Redirect, Route, Switch, withRouter } from 'react-router-dom';

import { BrowserRouter } from 'react-router-dom';
import { DialogsContainer } from './componets/Dialogs/Dialogs';
import { Header } from './componets/Header/HeaderContainer';
import { NotFound } from './componets/NotFound/NotFound';
import { Preloader } from './componets/common/Preloader/Preloader';
import { Profile } from './componets/Profile/ProfileContainer';
import { Provider } from 'react-redux';
import React from 'react';
import { RightSidebarContainer } from './componets/Sidebar/RightSidebar';
import { SettingsContainers } from './componets/Settings/SettingsContainer';
import { SidebarContainer } from './componets/Sidebar/Sidebar';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { initializedApp } from './redux/appReducer';
import { store } from './redux/redux-store';
import style from './App.module.scss';
import { withSuspense } from './hoc/withSuspense';

const News = React.lazy(() => import('./componets/News/News'));
const UsersContainer = React.lazy(() => import('./componets/Users/UsersContainer'));
const Login = React.lazy(() => import('./componets/Login/Login'));

class App extends React.Component {
  componentDidMount() {
    this.props.initializedApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader className={style.app__preloader} />;
    }
    return (
      <div className={style.app}>
        <div className={style.app__wrap}>
          <Header />
          <SidebarContainer />
          <div className={style.app__container}>
            <Switch>
              <Route exact path="/" render={() => <Redirect to={'/profile'} />} />
              <Route path="/login" render={withSuspense(Login)} />
              <Route path="/profile/:userId?" render={() => <Profile />} />
              <Route path="/dialogs/:userId?" render={() => <DialogsContainer />} />
              <Route path="/users" render={withSuspense(UsersContainer)} />
              <Route path="/news" render={withSuspense(News)} />
              <Route path="/settings" component={SettingsContainers} />
              <Route path="*" render={withSuspense(NotFound)} />
            </Switch>
          </div>
          {this.props.isActiveRightSidebar && <RightSidebarContainer />}
        </div>
      </div>
    );
  }
}

let mapStateToProps = state => {
  return {
    initialized: state.app.initialized,
    dialogs: state.dialogsPage.dialogs,
    isActiveRightSidebar: state.sidebar.isActiveRightSidebar,
  };
};

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializedApp })
)(App);

export const SocialNetworkApp = props => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};

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
// ! Деструктуризація пропсів, де потрібно
// ! Прибрати експорти по дефолту
// ! Пагінатор, змінити назву на універсальну
// ! Написати юніт тести
// ! Відмовитись від redux-form, переписати на react-hook-form
