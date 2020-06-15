import { Button, NavLinkButton } from '../common/Buttons/Buttons';

import React from 'react';
import { UserPhoto } from '../common/UserFoto/UserFoto';
import { connect } from 'react-redux';
import { logOut } from '../../redux/authReducer';
import style from './Header.module.scss';

export { React, Button, NavLinkButton, UserPhoto, connect, logOut, style };
