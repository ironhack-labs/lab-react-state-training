import React, { useState } from 'react';

import diceEmpty from '../assets/images/dice-empty.png';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';

const Dice = () => {
  const [diceImage, setDiceImage] = useState(diceEmpty);

  const rollBall = () => {
    setDiceImage(diceEmpty);
    setTimeout(() => {
      const randomValue = Math.floor(Math.random() * 6) + 1;
      switch (randomValue) {
        case 1:
          setDiceImage(dice1);
          break;
        case 2:
          setDiceImage(dice2);
          break;
        case 3:
          setDiceImage(dice3);
          break;
        case 4:
          setDiceImage(dice4);
          break;
        case 5:
          setDiceImage(dice5);
          break;
        case 6:
          setDiceImage(dice6);
          break;
        default:
          setDiceImage(diceEmpty);
      }
    }, 500);
  };

  return (
    <div onClick={rollBall} style={{ cursor: 'pointer' }}>
      <img src={diceImage} alt="Dice" />
    </div>
  );
};

export default Dice;
