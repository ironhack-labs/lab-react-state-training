import { useState } from "react";

// Importar las imágenes de los dados
import diceEmpty from "./../assets/images/dice-empty.png";
import dice1 from "./../assets/images/dice1.png";
import dice2 from "./../assets/images/dice2.png";
import dice3 from "./../assets/images/dice3.png";
import dice4 from "./../assets/images/dice4.png";
import dice5 from "./../assets/images/dice5.png";
import dice6 from "./../assets/images/dice6.png";

function Dice() {
  // Step 1: Inicializar el estado para realizar el seguimiento de la imagen actual del dado
  const [diceImage, setDiceImage] = useState(diceEmpty); // Inicialmente se muestra la imagen del dado vacío

  // Step 2: Definir la función para manejar el clic en el dado
  const rollDice = () => {
    // Primero, mostrar la imagen del dado vacío
    setDiceImage(diceEmpty);

    // Después de 1 segundo, mostrar una imagen de dado aleatoria
    setTimeout(() => {
      // Generar un número aleatorio entre 1 y 6
      const randomNumber = Math.floor(Math.random() * 6) + 1;

      // Actualizar la imagen del dado según el número aleatorio
      switch (randomNumber) {
        case 1:
          setDiceImage(dice1);
          break;
        case 2:
          setDiceImage(dice2);
          break;
        case 3:
          setDiceImage(dice3);
          break;
        case 4:
          setDiceImage(dice4);
          break;
        case 5:
          setDiceImage(dice5);
          break;
        case 6:
          setDiceImage(dice6);
          break;
        default:
          setDiceImage(diceEmpty);
      }
    }, 1000); // 1 segundo de retraso
  };

  return (
    <div>
      {/* Step 3: Renderizar la imagen del dado */}
      <img
        src={diceImage}
        alt="Dice"
        onClick={rollDice} // Llamar a rollDice al hacer clic
     
        style={{ cursor: "pointer", width: "150px", height: "auto" }}
      />
    </div>
  );
}

export default Dice;
