import React, { useState } from 'react';

const ClickablePicture = ({ img1, img2 }) => {
  const [currentImage, setCurrentImage] = useState(img1);

  const toggleImage = () => {
    setCurrentImage((prevImage) => (prevImage === img1 ? img2 : img1));
  };

  return (
    <div>
      <img
        src={currentImage}
        alt="clickable"
        onClick={toggleImage}
        style={{ cursor: 'pointer' }}
      />
    </div>
  );
};

export default ClickablePicture;