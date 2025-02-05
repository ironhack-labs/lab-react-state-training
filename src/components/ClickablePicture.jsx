import React, { useState } from 'react';


function ClickablePicture() {
  
  const image1 = 'assets/images/maxence.png'
  const image2 = 'assets/images/maxence-glasses.png'

 
  const [currentImage, setCurrentImage] = useState(image1);

 
  const toggleImage = () => {
    setCurrentImage(currentImage === image1 ? image2 : image1);
  };

  return (
    <div>
      <img
        src={currentImage}
        alt="Clickable"
        onClick={toggleImage} // Toggle image on click
        style={{ width: '300px', height: 'auto', cursor: 'pointer' }} 
      />
    </div>
  );
}

export default ClickablePicture;
