// Componente Dice
// Muestra un dado que cambia al hacer clic
import { useState } from "react";

// Importamos las imágenes del dado
import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";
import diceEmpty from "../assets/images/dice-empty.png";

// Guardamos todas las imágenes en un array
const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

function Dice() {
  // Creamos una variable para saber qué imagen mostrar
  // Empieza mostrando una imagen al azar
  const [dice, setDice] = useState(diceImages[Math.floor(Math.random() * 6)]);

  // Esta función se ejecuta al hacer clic
  function handleClick() {
    // Primero muestra el dado vacío
    setDice(diceEmpty);
    // Después de 1 segundo, muestra un dado al azar
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * 6);
      setDice(diceImages[randomIndex]);
    }, 1000);
  }

  return (
    <img
      src={dice}
      alt="Dado"
      onClick={handleClick}
      style={{ cursor: "pointer", width: "100px" }}
    />
  );
}

export default Dice;
