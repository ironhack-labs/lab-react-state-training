import React, { useState } from 'react';
import img1 from '../../images/maxence.png';
import img2 from '../../images/maxence-glasses.png';


function ClickablePicture() {
  const [isFirstImage, setIsFirstImage] = useState(true);

    const handleClick = () => {
        setIsFirstImage(!isFirstImage);
        };
  return (
    <>
       <div>
        <img
            src={isFirstImage ? img1 : img2}
            alt="Toggle"
            onClick={handleClick}
            style={{ cursor: "pointer" }}
         />
       </div>
      
    </>
  )
}

export default ClickablePicture;