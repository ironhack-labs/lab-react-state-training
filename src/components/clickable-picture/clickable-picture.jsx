import { useState } from "react";

import img from '../../assets/images/maxence.png'
import imgGlasses from '../../assets/images/maxence-glasses.png'

function ClickablePicture() {

    const [currentImage, setCurrentImage] = useState(img);
  

    const handleClick = () => {
        setCurrentImage(currentImage === img ? imgGlasses : img);
    };
  
    return (
      <img style={{width: 120, height:120}} src={currentImage} onClick={handleClick} />
    );
  }
  
  export default ClickablePicture;