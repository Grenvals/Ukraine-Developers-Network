import { HeadImage } from '../common/Head/Head';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Preloader } from '../common/Preloader/Preloader';
import { ProfileForm } from './ProfileForm/ProfileForm';
import React from 'react';
import { StatusForm } from './StatusForm/StatusForm';
import background from '../../assets/images/settings/settings-bg.jpg';
import style from './Settings.module.scss';

// import { ProfileForm } from './ProfileForm/ProfileForm';

const Settings = props => {
  if (!props.profile || !props.status) {
    return <Preloader />;
  } else {
    const initialData = {
      status: props.status,
    };
    const onSubmit = formData => {
      props.updateUserStatus(formData.status);
    };
    const onProfileSubmit = formData => {
      props.updateUserProfile(props.profile.userId, formData);
    };
    return (
      <div className={style.settings}>
        <PerfectScrollbar className={style.settings__scrollbar} component="div">
          <div className={style.settings__wrap}>
            <HeadImage image={background} />
            <StatusForm
              initialValues={initialData}
              onSubmit={onSubmit}
              photo={props.profile.photos.large}
              updateUserPhoto={props.updateUserPhoto}
              userId={props.profile.userId}
            />
            <ProfileForm initialValues={props.profile} onSubmit={onProfileSubmit} />
          </div>
        </PerfectScrollbar>
      </div>
    );
  }
};

export { Settings };
