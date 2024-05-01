import React, { useState } from 'react';

const ClickablePicture = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleClick = () => {
    setIsToggled(!isToggled);
  };

  return (
    <img
      src={isToggled ? "../assets/images/maxence-glasses.png" : "../assets/images/maxence.png"}
      alt="Toggled Image"
      onClick={handleClick}
    />
  );
};

export default ClickablePicture;