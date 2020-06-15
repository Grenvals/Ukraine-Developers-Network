import React, { useState } from 'react';

import cn from 'classnames';
import pauseIcon from '../../../assets/images/controls/pause.svg';
import playIcon from '../../../assets/images/controls/play.svg';
import style from './Player.module.scss';
import { useEffect } from 'react';

export const AudioPlayer = () => {
  const [myAudio] = useState(
    new Audio('https://coderadio-admin.freecodecamp.org/radio/8010/radio.mp3?1592237491')
  );
  const [isPlay, setPlay] = useState(true);
  useEffect(() => {
    myAudio.autoplay = true;
  }, [myAudio]);
  if (isPlay) {
    myAudio.play();
  } else {
    myAudio.pause();
  }
  const onClick = () => {
    if (isPlay) {
      setPlay(false);
    } else {
      setPlay(true);
    }
  };
  return (
    <div className={style.player}>
      <button className={style.player__btn} onClick={onClick}>
        <img className={style.player__icon} src={isPlay ? pauseIcon : playIcon} alt="" />
      </button>
      <p className={style.player__name}>Code Radio</p>
      <div className={cn(style.player__indicator, { [style.animate]: isPlay })}></div>
    </div>
  );
};
