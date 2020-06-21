import {
  getIsAuth,
  getAuthLogin,
  getAuthUserId,
  getAuthProfile,
} from '../../selectors/selectors.js';
import {
  Button,
  NavLinkButton,
  React,
  UserPhoto,
  connect,
  logOut,
  style,
} from './index.js';

const Header = React.memo(({ login, isAuth, profile, logOut }) => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.header__logo}>
          UDN <h1 className={style.header__title}>Ukraine developers Network</h1>
        </div>
        <div className={style.user}>
          <div className={style.user__flag}></div>
          <div className={style.user__name}>{login}</div>
          <div className={style.user__logo}>
            <UserPhoto photo={isAuth && profile != null && profile.photos.large} />
          </div>
          {isAuth ? (
            <Button
              className={style.header__button}
              onClick={logOut}
              name={'Log out'}
              type={'button'}
            />
          ) : (
            <NavLinkButton
              className={style.header__button}
              name={'Log in'}
              link={'/login'}
            />
          )}
        </div>
      </div>
    </header>
  );
});

const mapStateToProps = state => {
  return {
    isAuth: getIsAuth(state),
    login: getAuthLogin(state),
    userId: getAuthUserId(state),
    profile: getAuthProfile(state),
  };
};

const HeaderContainer = connect(mapStateToProps, {
  logOut,
})(Header);

export { HeaderContainer as Header };
