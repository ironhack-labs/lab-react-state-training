import React, { useState } from 'react';
import manWithoutGlasses from '../assets/images/maxence.png';
import manWithGlasses from '../assets/images/maxence-glasses.png';

const ClickablePicture = () => {
  const [isManWithGlasses, setIsManWithGlasses] = useState(false);

  const handleClick = () => {
    setIsManWithGlasses((prev) => !prev);
  };

  let pictureSource = manWithoutGlasses;

  // Explicitly check the value of isManWithGlasses
  if (isManWithGlasses === true) {
    pictureSource = manWithGlasses;
  } else {
    // No need to do anything since the default pictureSource is already set
  }

  return (
    <img
      src={pictureSource}
      alt="Clickable Picture"
      onClick={handleClick}
    />
  );
};

export default ClickablePicture;
