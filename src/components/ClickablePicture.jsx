import React, { useState } from 'react';
import maxenceImg from '../assets/maxence.png';
import maxenceGlassesImg from '../assets/maxence-glasses.png';

const ClickablePicture = () => {
  const [isClicked, setIsClicked] = useState(false);

  const togglePicture = () => {
    setIsClicked(!isClicked);
  };

  return (
    <img
      src={isClicked ? maxenceGlassesImg : maxenceImg}
      alt="Clickable Picture"
      onClick={togglePicture}
      style={{ cursor: 'pointer' }}
    />
  );
};

export default ClickablePicture;
