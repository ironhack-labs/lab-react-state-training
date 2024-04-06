import { useState } from "react";
import "./Dice.css";

function Dice() {
  const [diceValue, setDiceValue] = useState(null);
  const [rolling, setRolling] = useState(false);

  const rollDice = () => {
    setRolling(true);
    setDiceValue(null);
    setTimeout(() => {
      const newValue = Math.floor(Math.random() * 6) + 1;
      setDiceValue(`/assets/images/dice${newValue}.png`);
      setRolling(false);
    }, 1000);
  };

  return (
    <div>
      <img
        src={rolling ? "/assets/images/dice-empty.png" : diceValue}
        alt="Dice"
        style={{ width: "200px", height: "200px", cursor: "pointer" }}
        onClick={rollDice}
      />
    </div>
  );
}

export default Dice;
