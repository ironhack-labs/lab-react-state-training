import React, { useState } from 'react';
import image1 from '../assets/dice1.png';
import image2 from '../assets/dice-empty.png';

const ClickablePicture = () => {
    const [isFirstImage, setIsFirstImage] = useState(true);

    const handleClick = () => {
        setIsFirstImage(!isFirstImage);
    };

    return (
        <img
            src={isFirstImage ? image1 : image2}
            alt="clickable"
            onClick={handleClick}
            style={{ cursor: 'pointer' }}
        />
    );
};

export default ClickablePicture;