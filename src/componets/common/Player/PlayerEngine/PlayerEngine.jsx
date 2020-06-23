import React, { useState } from 'react';
import { useEffect } from 'react';

import treck1 from '../../../../assets/audio/The_Xx_-_The_Xx_Intro(uzimusic.ru).mp3';

export const PlayerEngine = React.memo(({ isPlay }) => {
  // const liveRadio = 'https://coderadio-admin.freecodecamp.org/radio/8010/radio.mp3?1592237491';
  const [myAudio] = useState(new Audio(treck1));
  useEffect(() => {
    myAudio.autoplay = true;
  }, [myAudio]);
  if (isPlay) {
    myAudio.play();
  } else {
    myAudio.pause();
  }
});
