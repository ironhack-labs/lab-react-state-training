import React, { useState } from "react";


function ClickablePicture() {

  const img1 = "./src/assets/images/maxence.png"; 
  const img2 = "./src/assets/images/maxence-glasses.png";


  const [currentImage, setCurrentImage] = useState(img1);


  const toggleImage = () => {
    setCurrentImage((prevImage) => (prevImage === img1 ? img2 : img1));
  };

  return (
    <div>
      <img 
        src={currentImage} 
        alt="Clickable" 
        onClick={toggleImage} 
        style={{ cursor: "pointer", width: "300px" }} 
      />
    </div>
  );
}

export default ClickablePicture;
