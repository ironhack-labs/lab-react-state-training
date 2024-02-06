import React, { useState } from 'react';
import './ClickablePicture.css';

const ClickablePicture = () => {
  const [isClicked, setIsClicked] = useState(false);

  const togglePicture = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="ClickablePicture" onClick={togglePicture}>
      <img
        src={isClicked ?"/assets/maxence.png" : '/assets/maxence-glasses.png'}
        alt="Click to toggle"
      />
    </div>
  );
};

export default ClickablePicture;