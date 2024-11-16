import './Dice.css';
import { useState } from 'react';
import { dice1, dice2, dice3, dice4, dice5, dice6, diceEmpty } from "../assets/images";


function Dice(){
    const [imageNumber, setImageNumber] = useState(
      Math.ceil(Math.random() * 6)
    );
    
    let randomNumber = Math.ceil(Math.random() * 6);
    const diceImages = [diceEmpty, dice1, dice2, dice3, dice4, dice5, dice6];
    
    const rollDice = () => {
        setImageNumber(0);
        setTimeout(() => {
            setImageNumber(randomNumber)
        }, 1000);
    }
    
    return (
      <div>
        <img
          onClick={rollDice}
          className="dice"
          src={diceImages[imageNumber]}
          alt=""
        />
      </div>
    );
    
}

export default Dice;