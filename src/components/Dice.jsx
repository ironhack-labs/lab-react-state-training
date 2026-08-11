import { useState } from "react";
import emptyDice from '../assets/images/dice-empty.png';
import Dice1 from '../assets/images/dice1.png';
import Dice2 from '../assets/images/dice2.png';
import Dice3 from '../assets/images/dice3.png';
import Dice4 from '../assets/images/dice4.png';
import Dice5 from '../assets/images/dice5.png';
import Dice6 from '../assets/images/dice6.png';

function Dice() {

    const [diceImage, setDiceImage] = useState(emptyDice);
    const diceImages = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];

    function randomDice() {
        const randomNumber = Math.floor(Math.random() * diceImages.length );
        setDiceImage(emptyDice);

        setTimeout(() => setDiceImage(diceImages[randomNumber]), 1000 );
    }

    return(
        <div>
            <img src={diceImage} onClick={randomDice} width={200} />
        </div>
    )
}



export default Dice;