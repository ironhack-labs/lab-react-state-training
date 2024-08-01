import { useState } from "react";
import DiceEmpty from "../assets/images/dice-empty.png";
import Dice1 from "../assets/images/dice1.png";
import Dice2 from "../assets/images/dice2.png";
import Dice3 from "../assets/images/dice3.png";
import Dice4 from "../assets/images/dice4.png";
import Dice5 from "../assets/images/dice5.png";
import Dice6 from "../assets/images/dice6.png";

function Dice() {
  const diceArray = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];

  const generateRandomDie = () => {
    return diceArray[Math.floor(diceArray.length * Math.random())];
  };

  const [dice, clickedDice] = useState(generateRandomDie());

  const handleClick = () => {
    clickedDice(!DiceEmpty);

    setTimeout(() => {
      clickedDice(generateRandomDie());
    }, 1000);
  };

  return (
    <div>
      <button onClick={handleClick}>
        {dice ? (
          <img
            className="dice"
            src={generateRandomDie()}
            alt="image of a die"
          />
        ) : (
          <img className="dice" src={DiceEmpty} alt="image of a die" />
        )}
      </button>
    </div>
  );
}

export default Dice;
