import React, { useState } from 'react';
import image1 from '../assets/images/maxence.png'
import image2 from '../assets/images/maxence-glasses.png';

const ClickablePicture = () => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        <div
            style={{
                padding: '20px',
                margin: '10px',
            }}
        >
            <img
                src={isClicked ? image1 :image2 }
                alt="Clickable Picture"
                onClick={handleClick}
            />
        </div>
    );
};

export default ClickablePicture