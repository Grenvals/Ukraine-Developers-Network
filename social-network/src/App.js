import 'react-perfect-scrollbar/dist/css/styles.css';

import React, { useEffect } from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';

import { BrowserRouter } from 'react-router-dom';
import { DialogsContainer } from './componets/Dialogs/Dialogs';
import { Header } from './componets/Header/Header';
import { News } from './componets/News/News';
import { NotFound } from './componets/NotFound/NotFound';
import { NotificationsContainer } from './componets/Notifications/Notifications';
import { Preloader } from './componets/common/Preloader/Preloader';
import { Profile } from './componets/Profile/ProfileContainer';
import { Provider } from 'react-redux';
import { RightSidebarContainer } from './componets/Sidebar/RightSidebar';
import { SettingsContainers } from './componets/Settings/SettingsContainer';
import { SidebarContainer } from './componets/Sidebar/Sidebar';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { initializedApp } from './redux/appReducer';
import { store } from './redux/redux-store';
import style from './App.module.scss';
import { useMediaQuery } from 'react-responsive';
import { withSuspense } from './hoc/withSuspense';

const UsersContainer = React.lazy(() => import('./componets/Users/UsersContainer'));
const Login = React.lazy(() => import('./componets/Login/Login'));

export const App = ({ initialized, initializedApp, isActiveRightSidebar }) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)',
  });
  useEffect(() => {
    initializedApp();
  }, [initializedApp]);
  if (!initialized) {
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
        {isDesktopOrLaptop && isActiveRightSidebar && <RightSidebarContainer />}
        <NotificationsContainer />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
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

// ! Переписати на класові компоненти(user итд).
// ! Пропрацювати анімацію і ефекти.
// ! Налаштувати валідацію
// ! Підправити структуру форми login (на прикладі ChatMessageForm)
// ! Розібратися з лейблами для форм
// ! Деструктуризація пропсів, де потрібно
// ! Прибрати експорти по дефолту
// ! Написати юніт тести
// ! Відмовитись від redux-form, переписати на react-hook-form
