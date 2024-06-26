import React, { useState } from 'react';
import diceEmptyImg from '../assets/dice-empty.png';
import dice1Img from '../assets/dice1.png';
import dice2Img from '../assets/dice2.png';
import dice3Img from '../assets/dice3.png';
import dice4Img from '../assets/dice4.png';
import dice5Img from '../assets/dice5.png';
import dice6Img from '../assets/dice6.png';

const diceImages = {
  empty: diceEmptyImg,
  dice1: dice1Img,
  dice2: dice2Img,
  dice3: dice3Img,
  dice4: dice4Img,
  dice5: dice5Img,
  dice6: dice6Img
};

const Dice = () => {
  const [diceImage, setDiceImage] = useState(diceImages.empty);
  const [rolling, setRolling] = useState(false);

  const rollDice = () => {
    if (!rolling) {
      setRolling(true);
      setDiceImage(diceImages.empty);
      setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        setDiceImage(diceImages[`dice${randomNumber}`]);
        setRolling(false);
      }, 1000);
    }
  };

  return (
    <img
      src={diceImage}
      alt="Dice"
      onClick={rollDice}
      style={{ cursor: 'pointer' }}
    />
  );
};

export default Dice;
