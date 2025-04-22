import React, { useState } from 'react';
import pic1 from '../assets/pic1.png';
import pic2 from '../assets/pic2.png';

function ClickablePicture() {
  const [showSecond, setShowSecond] = useState(false);

  function handleClick() {
    setShowSecond(!showSecond);
  }

  return (
    <img
      src={showSecond ? pic2 : pic1}
      alt="clickable"
      onClick={handleClick}
    />
  );
}

export default ClickablePicture;
