import React, { useState } from 'react';

const Dice = () => {
    const diceImages = [
        'src/assets/images/dice-empty.png',
        'src/assets/images/dice1.png',
        'src/assets/images/dice2.png',
        'src/assets/images/dice3.png',
        'src/assets/images/dice4.png',
        'src/assets/images/dice5.png',
        'src/assets/images/dice6.png'
    ];

    const [diceImage, setDiceImage] = useState('src/assets/images/dice-empty.png');
    const [isRolling, setIsRolling] = useState(false);

    const rollDice = () => {
        if (!isRolling) {
            setIsRolling(true);
            setDiceImage('src/assets/images/dice-empty.png'); 

            setTimeout(() => {
                const randomIndex = Math.floor(Math.random() * (diceImages.length - 1)) + 1;
                setDiceImage(diceImages[randomIndex]);
                setIsRolling(false);
            }, 1000); 
        }
    };

    return (
        <img
            src={diceImage}
            alt="Dice"
            onClick={rollDice}
            style={{ width: '200px', height: '200px', cursor: 'pointer' }}
        />
    );
};

export default Dice;
