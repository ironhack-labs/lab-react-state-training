import React, { useState } from 'react';
import image1 from "../assets/images/maxence-glasses.png";
import image2 from "../assets/images/maxence.png";
    
const ClickablePicture = () => {

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
    setIsClicked(!isClicked)
}
  
return (
<div>
        <img 
        src={isClicked ? image2 : image1}
        onClick={handleClick}
        />
    </div>
   )
}
export default ClickablePicture;