import React, { useState } from 'react';
// Import your images
import img1 from '../photos/maxence-glasses.png';
import img2 from '../photos/maxence.png';


function ClickablePicture() {
  
  const [currentImg, setCurrentImg] = useState(img1);

 
  const toggleImage = () => {
    setCurrentImg(currentImg === img2 ? img1 : img2);
  };

  return (
    <img src={currentImg} alt="Clickable" onClick={toggleImage} style={{cursor: 'pointer'}} />
  );
}

export default ClickablePicture;
