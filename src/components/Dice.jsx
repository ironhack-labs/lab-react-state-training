import React, { useState } from "react";
import image1 from "../assets/images/dice-empty.png"
import image2 from "../assets/images/dice1.png"
import image3 from "../assets/images/dice2.png"
import image4 from "../assets/images/dice3.png"
import image5 from "../assets/images/dice4.png"
import image6 from "../assets/images/dice5.png"
import image7 from "../assets/images/dice6.png"




function Dice() {
    
    const diceImages = [image2, image3, image4, image5, image6, image7];
    
    const [emptyDice, setEmptyDice] = useState(image1);

    const handleClick = () => {
        setEmptyDice(image1);
        setTimeout(() => {
            const randomImage = Math.floor(Math.random() * diceImages.length);
            setEmptyDice(diceImages[randomImage]);
        }, 1000);
    };

    return (
        <img
            src={emptyDice}
            alt="Dice"
            onClick={handleClick}
            style={{ cursor: "pointer", width: "100px", height: "100px" }}
        />
    );
}


export default Dice;