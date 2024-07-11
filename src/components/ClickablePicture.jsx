import React, { useState } from "react";
import img1 from '../assets/images/maxence.png';
import img2 from '../assets/images/maxence-glasses.png';

function ClickablePicture() {

  const [currentImage, setCurrentImage] = useState(img1);

    const handleClick = () => {
        setCurrentImage(prevImage => (prevImage === img1 ? img2 : img1));
    };

  return (
    <div className="ClickablePicture">
       <img src={currentImage} alt="Toggle" onClick={handleClick} style={{ cursor: 'pointer' }} />
      
    </div>
  );
}

export default ClickablePicture;
