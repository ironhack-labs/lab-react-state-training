import React, { useState } from 'react';
import img from "../assets/images/maxence.png"
import imgAlt from "../assets/images/maxence-glasses.png"

function ClickablePicture() {
  const [currentImg, setCurrentImg] = useState(img);
  const handleImgToggle = () => {
    setCurrentImg((prevImg) => (prevImg === img ? imgAlt : img)); 
  };
    
  return (
    <div>
      <img
        src={currentImg}
        alt="Toggle"
        onClick={handleImgToggle}
        style={{ cursor: 'pointer', transition: "2s" }}
      />
    </div>
  );
}

export default ClickablePicture;