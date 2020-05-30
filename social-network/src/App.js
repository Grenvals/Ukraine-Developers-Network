import React from 'react';
import './App.scss';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { SidebarContainer } from './componets/Sidebar/Sidebar';
import { Profile } from './componets/Profile/ProfileContainer';
import { Header } from './componets/Header/HeaderContainer';
import { initializedApp } from './redux/appReducer';
import { Preloader } from './componets/common/Preloader/Preloader';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { withSuspense } from './hoc/withSuspense';
import { SettingsContainers } from './componets/Settings/SettingsContainer';
import { NotFound } from './componets/NotFound/NotFound';
import { store } from './redux/redux-store';
const DialogsContainer = React.lazy(() => import('./componets/Dialogs/DialogsContainer'));
const News = React.lazy(() => import('./componets/News/News'));
const UsersContainer = React.lazy(() => import('./componets/Users/UsersContainer'));
const Login = React.lazy(() => import('./componets/Login/Login'));

class App extends React.Component {
  componentDidMount() {
    this.props.initializedApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader className="app__preloader" />;
    }

    return (
      <div className="app-wrapper">
        <Header />
        <SidebarContainer />
        <div className="content-wrapper">
          <PerfectScrollbar className="scrollbar" component="div">
            <Switch>
              <Route exact path="/" render={() => <Redirect to={'/profile'} />} />
              <Route path="/login" render={withSuspense(Login)} />
              <Route path="/profile/:userId?" render={() => <Profile />} />
              <Route path="/dialogs" render={withSuspense(DialogsContainer)} />
              <Route path="/users" render={withSuspense(UsersContainer)} />
              <Route path="/news" render={withSuspense(News)} />
              <Route path="/settings" component={SettingsContainers} />
              <Route path="*" render={withSuspense(NotFound)} />
            </Switch>
          </PerfectScrollbar>
        </div>
      </div>
    );
  }
}

let mapStateToProps = state => {
  return {
    initialized: state.app.initialized,
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
// export default SocialNetworkApp

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
