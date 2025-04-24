import React, { useState } from 'react';
import maxence from '../assets/images/maxence.png'
import maxenceglasses from '../assets/images/maxenceglasses.png'
function ClickablePicture() {
  const [isClicked, setIsClicked] = useState(false);


  function handleClick() {
    setIsClicked(!isClicked);
  }

  return (
    <div onClick={handleClick}>
      <img 
        src={isClicked ? maxenceglasses : maxence} 
        alt="Toggling" 
        style={{ cursor: 'pointer' }} 
      />
    </div>
  );
}

export default ClickablePicture;