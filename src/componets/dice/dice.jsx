import { useState } from "react";
import diceEmpty from "/src/assets/images/dice-empty.png";
import dice1 from "/src/assets/images/dice1.png";
import dice2 from "/src/assets/images/dice2.png";
import dice3 from "/src/assets/images/dice3.png";
import dice4 from "/src/assets/images/dice4.png";
import dice5 from "/src/assets/images/dice5.png";
import dice6 from "/src/assets/images/dice6.png";

function Dice() {
  const [dice, setDice] = useState(3);
  const diceImages = {
    empty: diceEmpty,
    1: dice1,
    2: dice2,
    3: dice3,
    4: dice4,
    5: dice5,
    6: dice6,
  };

  const rollDice = () => {
    setDice("empty");

    setTimeout(() => {
      const randomNum = Math.floor(Math.random() * 6) + 1;
      setDice(randomNum);
    }, 1000);
  };

  return (
    <div>
      <img
        src={diceImages[dice]}
        onClick={rollDice}
        style={{ width: 150, height: 150, marginBottom: 10 }}
      />
    </div>
  );
}

export default Dice;
