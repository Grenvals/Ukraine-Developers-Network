import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { Redirect, Route, Switch, withRouter, BrowserRouter } from 'react-router-dom';
import { compose } from 'redux';

import { Dialogs } from './componets/Dialogs/Dialogs';
import { Header } from './componets/Header/Header';
import { Login } from './componets/Login/Login';
import { News } from './componets/News/News';
import { NotFound } from './componets/NotFound/NotFound';
import { Notifications } from './componets/Notifications/Notifications';
import { Profile } from './componets/Profile/ProfileContainer';
import { Settings } from './componets/Settings/SettingsContainer';
import { RightSidebar } from './componets/Sidebar/RightSidebar';
import { Sidebar } from './componets/Sidebar/Sidebar';
import { Preloader } from './componets/common/Preloader/Preloader';
import { withSuspense } from './hoc/withSuspense';
import { initializedApp } from './redux/appReducer';
import { store } from './redux/redux-store';

import style from './App.module.scss';

const UsersContainer = React.lazy(() => import('./componets/Users/UsersContainer'));

const App = ({ initialized, initializedApp, isActiveRightSidebar }) => {
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
        <Sidebar />
        <div className={style.app__container}>
          <Switch>
            <Route exact path="/" render={() => <Redirect to={'/profile'} />} />
            <Route path="/login" render={() => <Login />} />
            <Route path="/profile/:userId?" render={() => <Profile />} />
            <Route path="/dialogs/:userId?" render={() => <Dialogs />} />
            <Route path="/users" render={withSuspense(UsersContainer)} />
            <Route path="/news" render={withSuspense(News)} />
            <Route path="/settings" component={Settings} />
            <Route path="*" render={withSuspense(NotFound)} />
          </Switch>
        </div>
        {isDesktopOrLaptop && isActiveRightSidebar && <RightSidebar />}
        <Notifications />
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

const SocialNetworkApp = props => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};

export { SocialNetworkApp };

// ! Налаштувати валідацію
// ! Розібратися з лейблами для форм
// ! Написати юніт тести
// ! Відмовитись від redux-form, переписати на react-hook-form
