// src/components/ClickablePicture.jsx

import React, { useState } from 'react';

const ClickablePicture = () => {
    const [isGangster, setIsGangster] = useState(false);

    const handleClick = () => {
        setIsGangster(!isGangster);
    };

    return (
        <img
            src={isGangster ? 'src/assets/images/maxence-glasses.png' : 'src/assets/images/maxence.png'}
            alt={isGangster ? 'Gangster Maxence' : 'Normal Maxence'}
            onClick={handleClick}
            style={{ cursor: 'pointer' }}
        />
    );
};

export default ClickablePicture;
