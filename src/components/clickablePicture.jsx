import React, { useState } from 'react';
import image1 from '../assets/images/maxence.png';
import image2 from '../assets/images/maxence-glasses.png'; 
function ClickablePicture() {
    const [isFirstImage, setIsFirstImage] = useState(true);
    const toggleImage = () => {
        setIsFirstImage(prev => !prev);
    };

    return (
       <img
        src={isFirstImage ? image1 : image2}
        onClick={toggleImage}
        alt="clickable"
        style={{ cursor: 'pointer', maxWidth: '300px'}} 
        />
    );
}

export default ClickablePicture;