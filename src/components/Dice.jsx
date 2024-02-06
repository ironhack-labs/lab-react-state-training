import { useState } from "react";
import diceEmpty from "/src/assets/images/dice-empty.png";
import dice1 from "/src/assets/images/dice1.png";
import dice2 from "/src/assets/images/dice2.png";
import dice3 from "/src/assets/images/dice3.png";
import dice4 from "/src/assets/images/dice4.png";
import dice5 from "/src/assets/images/dice5.png";
import dice6 from "/src/assets/images/dice6.png";

export default function Dice() {
  let diceArr = [dice1, dice2, dice3, dice4, dice5, dice6];
  let randomDice = diceArr[Math.floor(Math.random() * diceArr.length)];
  const [dice, setDice] = useState(randomDice);

  const changeDice = () => {
    setDice(diceEmpty);
    setTimeout(() => {
      setDice(randomDice);
    }, 1000);
  };

  return (
    <div>
      <img
        style={{ height: "200px" }}
        src={dice}
        onClick={() => changeDice()}
        alt=""
      />
    </div>
  );
}
