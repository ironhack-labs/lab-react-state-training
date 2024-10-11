import React, { useState } from 'react';
const image1 = 'http://www.stickpng.com/assets/images/584999937b7d4d76317f5ffd.png'; // External URL image
const image2 = new URL('../assets/maxence-glasses.png', import.meta.url).href;

const ClickablePicture = () => {
  const [isFirstImage, setIsFirstImage] = useState(true); // Correct setter function

  const toggleImage = () => {
    setIsFirstImage(!isFirstImage); // Using correct setter function
  };

  return (
    <img
      src={isFirstImage ? image1 : image2}
      alt="Clickable"
      onClick={toggleImage}
      style={{ cursor: 'pointer' }}
    />
  );
};

export default ClickablePicture;
