import {useState} from "react";

import dice0 from "../assets/images/dice-empty.png"
import dice1 from "../assets/images/dice1.png"
import dice2 from "../assets/images/dice2.png"
import dice3 from "../assets/images/dice3.png"
import dice4 from "../assets/images/dice4.png"
import dice5 from "../assets/images/dice5.png"
import dice6 from "../assets/images/dice6.png"



const diceImages = [dice0, dice1, dice2, dice3, dice4, dice5, dice6];

const Dice = () => {
    const [diceValueImage, setDiceValueImage] = useState(dice3); // Start with 3 on the dice as shown
  
    const rollDice = () => {
      setDiceValueImage(dice0); // Show empty dice first for a second
  
      setTimeout(() => {
        // Get a random number between 1 and 6
        const diceThrow = Math.floor(Math.random() * 6) + 1;
  
        // Set the corresponding image
        setDiceValueImage(diceImages[diceThrow]);
      }, 1000);
    }

    return (
        <div>
            <img src={diceValueImage}
            alt = "somethings wrong"
            onClick={rollDice}
            style={{ cursor: "pointer", width: "100px", height: "100px" }}

/>

        </div>


    )

}

export default Dice;