import React, { useState } from "react";

import NoGlasses from '../assets/images/maxence.png';
import Glasses from '../assets/images/maxence-glasses.png';



export default function ClickableImage() {
    const [currentImage, setCurrentImage] = useState(NoGlasses);
  const handleImageClick = () => {
    if (currentImage === NoGlasses) {
      setCurrentImage(Glasses);
    } else {
      setCurrentImage(NoGlasses);
    }
  };
  return (
    <div>
        
      <button onClick={handleImageClick}><img src={currentImage} alt="picture" /></button>
    </div>
  )
}
