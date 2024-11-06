import { useState } from "react"
import Empty from "../assets/images/dice-empty.png"
import Dice1 from "../assets/images/dice1.png"
import Dice2 from "../assets/images/dice2.png";
import Dice3 from "../assets/images/dice3.png";
import Dice4 from "../assets/images/dice4.png";
import Dice5 from "../assets/images/dice5.png";
import Dice6 from "../assets/images/dice6.png";


function Dice() {
  const [dice, setDice] = useState(Empty);

  function randomNumber() {
    const randomNumber = (Math.floor(Math.random() * 6) + 1)
    switch (randomNumber) {
      case 1:
        setDice(Dice1)
        break;
      case 2:
        setDice(Dice2)
        break;
      case 3:
        setDice(Dice3)
        break;
      case 4:
        setDice(Dice4)
        break;
      case 5:
        setDice(Dice5)
        break;
      case 6:
        setDice(Dice6)
        break;

    }
  }

  return (
    <div>
      <button onClick={randomNumber}>
        <img width={100} src={dice} alt="" />
      </button>
    </div>
  );
};

export default Dice