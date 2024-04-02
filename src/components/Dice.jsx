

import React, { useState } from 'react';

const Dice = ({ diceImages }) => {


    const [currentImage, setCurrentImage] = useState(diceImages[0]);

    const rollDice = () => {
        setCurrentImage(diceImages[0]);

        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * diceImages.lenght);
            setCurrentImage(diceImages[randomIndex]);
        }, 1000);
    };

    return (
        <div className="dice-container" onClick={rollDice}>

            <img src={currentImage} alt="dice" />

        </div>
    );
}

export default Dice;