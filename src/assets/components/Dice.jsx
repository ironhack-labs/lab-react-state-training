import { useState } from 'react';
import emptyDice from '../images/dice-empty.png';
import dice1 from '../images/dice1.png';
import dice2 from '../images/dice2.png';
import dice3 from '../images/dice3.png';
import dice4 from '../images/dice4.png';
import dice5 from '../images/dice5.png';
import dice6 from '../images/dice6.png';

const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

function Dice() {
  const [currentImage, setCurrentImage] = useState(emptyDice);

  const handleClick = () => {
    // Muestra la imagen vacía
    setCurrentImage(emptyDice);
    
    // Cambia a una imagen aleatoria después de 1 segundo
    setTimeout(() => {
      const randomValue = Math.floor(Math.random() * 6); // Genera un número aleatorio entre 0 y 5
      setCurrentImage(diceImages[randomValue]); // Cambia a la imagen del dado correspondiente
    }, 1000);
  };

  return (
    <img
      src={currentImage}
      alt="Dice"
      onClick={handleClick}
      style={{ cursor: 'pointer', width: '150px', height: '150px' }}
    />
  );
}

export default Dice;
