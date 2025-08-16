import {useState} from 'react';
import emptyDice from '../assets/images/dice-empty.png';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';
function Dice() {
  const dice = [dice1, dice2, dice3, dice4, dice5, dice6];
  const randomDice = () => dice[Math.floor(Math.random() * dice.length)];
  const [currentDice, setDice] = useState(randomDice());

  const userClick = () => {
    setDice(emptyDice);
    setTimeout(() => setDice(randomDice()), 1500);
  };

  return (
    <div className="margin">
      <img src={currentDice} onClick={userClick} />
    </div>
  );
}

export default Dice;
