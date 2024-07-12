import { useState, useEffect } from "react";
import diceEmpty from "../assets/images/dice-empty.png";
import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";

function Dice() {
  const [diceImage, setDiceImage] = useState(null);
  const [isRolling, setIsRolling] = useState(false);

  useEffect(() => {
    if (!isRolling) {
      const randomNumber = Math.floor(Math.random() * 6) + 1;
      const diceImages = [diceEmpty, dice1, dice2, dice3, dice4, dice5, dice6];
      setDiceImage(diceImages[randomNumber]);
    }
  }, [isRolling]);

  const rollDice = () => {
    setDiceImage(diceEmpty);
    setIsRolling(true);
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 6) + 1;
      const diceImages = [diceEmpty, dice1, dice2, dice3, dice4, dice5, dice6];
      setDiceImage(diceImages[randomNumber]);
      setIsRolling(false);
    }, 1000);
  };

  return (
    <div>
      <img src={diceImage} alt="Dice" onClick={rollDice} height={100} />
    </div>
  );
}

/* const Dice = () => {
  const [dice, setDice] = useState(1);
  const [isRolled, setIsRolled] = useState(false);
  const handleClick = () => {
    setIsRolled(false);
    setTimeout(() => {
      setDice(Math.floor(Math.random() * 6) + 1);
      setIsRolled(true);
    }, 1000);
  };
  return (
    <img
      className="dice"
      src={
        isRolled
          ? `src/assets/images/dice${dice}.png`
          : "src/assets/images/dice-empty.png"
      }
      onClick={handleClick}
    ></img>
  );
}; */

export default Dice;
