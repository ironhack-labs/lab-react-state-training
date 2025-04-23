import React, { useState } from 'react';
import image1 from '../assets/images/lol.jpg';
import image2 from '../assets/images/lol-Copy.jpg';
import './ClickablePicture.css'; 

function ClickablePicture() {
  const [isClicked, setIsClicked] = useState(false);
 
  function handleClick() {
    setIsClicked(!isClicked);
  }
  return (
    <div className="clickable-picture" onClick={handleClick}>
      <img 
        src={isClicked ? image2 : image1} 
        alt="Toggling" 
        style={{ cursor: 'pointer' }} 
      />
    </div>
  );
}
export default ClickablePicture;