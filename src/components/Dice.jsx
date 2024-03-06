import diceEmpty from "../assets/images/dice-empty.png";
import diceOne from "../assets/images/dice1.png";
import diceTwo from "../assets/images/dice2.png";
import diceThree from "../assets/images/dice3.png";
import diceFour from "../assets/images/dice4.png";
import diceFive from "../assets/images/dice5.png";
import diceSix from "../assets/images/dice6.png";

const Dice = ({ dice, setDice }) => {
  const diceArray = [diceOne, diceTwo, diceThree, diceFour, diceFive, diceSix];

  const rollDice = () => {
    setDice(diceEmpty);
    setTimeout(() => {
      const randomDie = Math.floor(Math.random() * diceArray.length);
      setDice(diceArray[randomDie]);
    }, 1000);
  };

  return (
    <div>
      <img
        src={dice === undefined ? rollDice() : dice}
        onClick={rollDice}
        className="diceStyle"
      />
    </div>
  );
};

export default Dice;
