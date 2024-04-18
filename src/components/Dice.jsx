import { useState } from "react";
import { useEffect } from "react";
import EmptyPicture from "../assets/images/dice-empty.png";
import DiceOne from "../assets/images/dice1.png";
import DiceTwo from "../assets/images/dice2.png";
import DiceThree from "../assets/images/dice3.png";
import DiceFour from "../assets/images/dice4.png";
import DiceFive from "../assets/images/dice5.png";
import DiceSix from "../assets/images/dice6.png";

function Dice() {
  const [diceImage, setDiceImage] = useState(EmptyPicture);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomNumber = Math.floor(Math.random() * 6) + 1;
      switch (randomNumber) {
        case 1:
          setDiceImage(DiceOne);
          break;
        case 2:
          setDiceImage(DiceTwo);
          break;
        case 3:
          setDiceImage(DiceThree);
          break;
        case 4:
          setDiceImage(DiceFour);
          break;
        case 5:
          setDiceImage(DiceFive);
          break;
        case 6:
          setDiceImage(DiceSix);
          break;
        default:
          setDiceImage(EmptyPicture);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <img
        src={diceImage}
        alt="Dice"
        style={{ cursor: "pointer", width: "500px" }}
      />
    </div>
  );
}

export default Dice;
