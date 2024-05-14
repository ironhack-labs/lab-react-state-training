import { useState } from 'react';

const Dice = () => {
  const [diceValue, setDiceValue] = useState(null);
  const [EmptyDice, setShowEmptyDice] = useState(true);
  const rollDice = () => {
    setShowEmptyDice(false);
    setTimeout(() => {
      const randomDice = Math.floor(Math.random() * 6) + 1;
      setDiceValue(randomDice);
      setShowEmptyDice(true);
    }, 1000);
  };
  return (
    <div>
      {EmptyDice ? (
        <img src="../assets/images/dice-empty.png" alt="" />
      ) : (
        <img src={`../assets/images/dice${diceValue}.png`} alt={`Dice ${diceValue}`} />
      )}
      <button onClick={rollDice}>Roll the Dice</button>
    </div>
  );
};

export default Dice;