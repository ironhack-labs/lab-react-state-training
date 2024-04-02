import React, { useState } from 'react';
import maxence from './src/assets/images/maxence.png';
import maxenceGlasses from './src/assets/images/maxence-glasses.png';

const ClickablePicture = () => {
    const [imageSrc, setImageSrc] = useState(maxence);
  
    const toggleImage = () => {
        setImageSrc(prevImageSrc =>
            prevImageSrc === maxence
                ? maxenceGlasses
                : maxence
        );
    };
  
    return (
        <div>
            <img src={imageSrc} alt="Imagem" onClick={toggleImage} style={{ cursor: 'pointer' }} />
        </div>
    );
};

export default ClickablePicture;