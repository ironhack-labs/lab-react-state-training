import React, { useState } from 'react';
import picture1 from '../assets/images/maxence.png';
import picture2 from '../assets/images/maxence-glasses.png';

const ClickablePicture = () => {
  const [isFirstPicture, setIsFirstPicture] = useState(true);

  const handleClick = () => {
    setIsFirstPicture(!isFirstPicture);
  };

  return (
    <div className="d-flex justify-content-center align-items-center border rounded p-3">
    <img
      src={isFirstPicture ? picture1 : picture2}
      alt="Clickable"
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    />
    </div>
  );
};

export default ClickablePicture;
