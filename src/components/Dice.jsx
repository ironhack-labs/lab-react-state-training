import DiceEmpty from "../assets/images/dice-empty.png";
import Dice1 from "../assets/images/dice1.png";
import Dice2 from "../assets/images/dice2.png";
import Dice3 from "../assets/images/dice3.png";
import Dice4 from "../assets/images/dice4.png";
import Dice5 from "../assets/images/dice5.png";
import Dice6 from "../assets/images/dice6.png";
import { useState } from "react";

function Dice() {
  const diceImage = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];
  const randomIndex = Math.floor(Math.random() * diceImage.length);
  const randomDiceImage = diceImage[randomIndex];

  const [estadoInicial, setestadoFinal] = useState(randomDiceImage);
  // State qui va stocker l'image actuelle du dé affiché

  const handleClick = () => {
    setestadoFinal(DiceEmpty); // Pour afficher l'image vide en premier
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * diceImage.length);
      const randomDiceImage = diceImage[randomIndex];
      setestadoFinal(randomDiceImage); // Met à jour le state avec l'image aleatoire
    }, 1000);
  };

  return (
    <img
      src={estadoInicial}
      alt="dice"
      onClick={handleClick}
      style={{ width: "100px", height: "100px" }}
    />
  );
}

export default Dice;
