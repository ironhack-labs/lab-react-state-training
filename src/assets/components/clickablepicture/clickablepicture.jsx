import React, { useState } from 'react';

const ClickablePicture = ({ img, imgClicked }) => {

  const [isClicked, setIsClicked] = useState(false);


  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <img 
      src={isClicked ? imgClicked : img} 
      alt="clickable" 
      onClick={handleClick} 
      style={{ cursor: 'pointer', width: '200px' }} 
    />
  );
};

export default ClickablePicture;
