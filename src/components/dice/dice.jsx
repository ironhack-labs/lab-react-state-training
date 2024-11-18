import { useState } from "react";
import diceEmpty from "../../assets/images/dice-empty.png";
import dice1 from "../../assets/images/dice1.png";
import dice2 from "../../assets/images/dice2.png";
import dice3 from "../../assets/images/dice3.png";
import dice4 from "../../assets/images/dice4.png";
import dice5 from "../../assets/images/dice5.png";
import dice6 from "../../assets/images/dice6.png";

function Dice() {
    // Estado para la imagen actual del dado
    const [currentDice, setCurrentDice] = useState(diceEmpty);

    // Función para cambiar la imagen al hacer clic
    const rollDice = () => {
        // Primero, muestra la imagen del dado vacío
        setCurrentDice(diceEmpty);

        // Después de un segundo, muestra una imagen aleatoria de dado
        setTimeout(() => {
            // Selecciona una imagen aleatoria de dado entre 1 y 6
            const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];
            const randomDice = diceImages[Math.floor(Math.random() * diceImages.length)];
            setCurrentDice(randomDice);
        }, 1000);
    };

    return (
        <img 
            src={currentDice} 
            alt="Dice" 
            onClick={rollDice} 
            style={{ cursor: "pointer", width: "100px", height: "100px" }} // Ajusta el tamaño según sea necesario
        />
    );
}

export default Dice;