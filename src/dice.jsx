import { useState } from "react";


import diceEmpty from "../assets/images/dice-empty.png";

function Dice() {
  const [diceImage, setDiceImage] = useState(`../assets/images/dice1.png`);
  const [rolling, setRolling] = useState(false);

  const rollDice = () => {
    if (rolling) return;

    setRolling(true);
    
    setDiceImage(diceEmpty);

    
    setTimeout(() => {
      const randomFace = Math.floor(Math.random() * 6) + 1;
      // Dynamic import won't work here for static assets — import all faces upfront
      setDiceImage(`../assets/images/dice${randomFace}.png`);
      setRolling(false);
    }, 1000);
  };

  return (
    <img
      className="dice"
      src={diceImage}
      alt="dice"
      onClick={rollDice}
      style={{ cursor: rolling ? "not-allowed" : "pointer" }}
    />
  );
}

export default Dice;