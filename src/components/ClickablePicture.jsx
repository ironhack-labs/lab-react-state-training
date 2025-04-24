import React, { useState } from 'react';

export default function ClickablePicture() {

    const [isFirstImage, setIsFirstImage] = useState(true);

    // Toggle image on click
    const handleClick = () => {
        setIsFirstImage(!isFirstImage);
    };

    return (
        <div>
            <img
                src={isFirstImage ? '/src/assets/images/maxence.png' : '/src/assets/images/maxence-glasses.png'}  // Toggle between images
                alt="toggle"
                onClick={handleClick}  // Handle click event
                style={{ cursor: 'pointer' }}  // Add pointer cursor to indicate it's clickable
            />
        </div>
    );
}