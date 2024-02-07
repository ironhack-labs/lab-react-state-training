import React, {useState} from "react";
import emptyDiceImage from "../assets/images/dice-empty.png";
import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";

function getRandomDiceImage() {
    const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];
    const randomIndex = Math.floor(Math.random() * diceImages.length);
    return diceImages[randomIndex];
}

function Dice() {
    const [diceImage, setDiceImage] = useState(emptyDiceImage);

    const rollDice = () => {
        setDiceImage(emptyDiceImage);
        setTimeout(() => {
            setDiceImage(getRandomDiceImage());
          }, 1000);
        }
    return (
        <img
            src={diceImage}
            onClick={rollDice}
            style={{ cursor: "pointer" }}
            className="ImageDice"
        />
    );
    }

export default Dice;


