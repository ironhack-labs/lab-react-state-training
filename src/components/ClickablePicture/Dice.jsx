import { useState } from "react";

function Dice() {
  const [diceValue, setDiceValue] = useState(null);
  const [rolling, setRolling] = useState(false);

  const rollDice = () => {
    setRolling(true);
    setDiceValue(null); // Reset dice value to empty picture
    setTimeout(() => {
      const newValue = Math.floor(Math.random() * 6) + 1;
      setDiceValue(`/assets/images/dice${newValue}.png`);
      setRolling(false);
    }, 1000); // Delay for 1 second before showing the new value
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
