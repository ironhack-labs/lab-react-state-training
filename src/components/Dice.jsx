import { useState } from "react";

export function Dice() {
  const [showDice, setShowDice] = useState("dice-on");

  const toggleDice = () => {
    if (showDice === "dice-on") {
      setShowDice("dice-off");
    } else {
      setShowDice("dice-on");
    }
  };
  return (
    <button onClick={toggleDice}>

      <img className="orig-dice"
        src="src\assets\images\dice3.png"
        alt="3"
      />
      <img
        className={`Dice ${showDice}`}
        src="src\assets\images\dice-empty.png"
        alt="0"
      />
    </button>
  );
}