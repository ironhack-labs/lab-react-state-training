import { useEffect, useState } from "react";
import emptyDice from "../assets/images/dice-empty.png";
import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";

const dice = [dice1, dice2, dice3, dice4, dice5, dice6];

function Dice() {
  const [roll, setRoll] = useState(null);

  useEffect(() => {
    const randomRoll = Math.floor(Math.random() * 6);
    setTimeout(() => {
      setRoll(randomRoll);
    }, 1000);
  }, []);

  return (
    <div>
      <img
        style={{ width: "200px" }}
        src={roll === null ? emptyDice : dice[roll]}
        alt="Dice"
      />
    </div>
  );
}

export default Dice;
