function Dice() {
  const rollDice = () => {
    setCurrentDice(diceEmpty);

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * dices.length);

      setCurrentDice(dices[randomIndex]);
    }, 1000);
  };

  return (
    <img
      src={currentDice}
      alt="dice"
      onClick={rollDice}
    />
  );
}

export default Dice;