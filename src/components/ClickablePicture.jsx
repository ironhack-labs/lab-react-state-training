import React, { useState } from 'react';
import img1 from '../assets/images/maxence.png'; // Replace with actual image paths
import img2 from '../assets/images/maxence-glasses.png';

function ClickablePicture() {
    const [image, setImage] = useState(img1);

    const toggleImage = () => {
        setImage(currentImage => currentImage === img1 ? img2 : img1);
    };

    return (
        <img src={image} alt="Clickable" onClick={toggleImage} />
    );
}

export default ClickablePicture;
