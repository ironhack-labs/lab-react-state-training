import { useState } from "react";

export default function Dice() {
  let diceBase = "src/assets/images/dice";
  let diceStates = ["1", "2", "3", "4", "5", "6"];
  const [diceState, setState] = useState("-empty");

  const rollDice = () => {
    // Set the dice to empty first
    setState("-empty");

    // After 1 second, set a new random dice state
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * diceStates.length);
      setState(diceStates[randomIndex]);
    }, 1000);
  };

  return (
    <>
      <img id="dice" onClick={rollDice} src={diceBase + diceState + ".png"} alt="dasdsa" />
    </>
  );
}
