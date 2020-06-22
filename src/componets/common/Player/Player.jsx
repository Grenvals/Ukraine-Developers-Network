import React, { useState } from 'react';

import cn from 'classnames';

// import treck1 from '../../../assets/audio/The_Xx_-_The_Xx_Intro(uzimusic.ru).mp3';
import pauseIcon from '../../../assets/images/controls/pause.svg';
import playIcon from '../../../assets/images/controls/play.svg';
import { PlayerEngine } from './PlayerEngine/PlayerEngine';

import style from './Player.module.scss';

export const AudioPlayer = () => {
  // const liveRadio = 'https://coderadio-admin.freecodecamp.org/radio/8010/radio.mp3?1592237491';

  const [isPlay, setPlay] = useState(false);
  const [isStart, setStart] = useState(false);
  const handleClick = () => {
    if (!isStart) {
      setStart(true);
    }
    if (isPlay) {
      setPlay(false);
    } else {
      setPlay(true);
    }
  };
  return (
    <div className={style.player}>
      {isStart && <PlayerEngine isPlay={isPlay} />}
      <button className={style.player__btn} onClick={handleClick}>
        <img className={style.player__icon} src={isPlay ? pauseIcon : playIcon} alt="" />
      </button>
      <p className={style.player__name}>Code Radio</p>
      <div className={cn(style.player__indicator, { [style.animate]: isPlay })}></div>
    </div>
  );
};
