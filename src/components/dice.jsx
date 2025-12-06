
import { useState, useRef } from "react";
import emptyDice from "../assets/images/dice-empty.png";
import dice1 from "../assets/images/dice1.png";
import dice2 from "../assets/images/dice2.png";
import dice3 from "../assets/images/dice3.png";
import dice4 from "../assets/images/dice4.png";
import dice5 from "../assets/images/dice5.png";
import dice6 from "../assets/images/dice6.png";

function Dice () {
    
    const diceImages = [emptyDice, dice1, dice2, dice3, dice4, dice5, dice6];

    const [value, setValue] = useState(3);

    const first = useRef(true);
    const intervalTrue = useRef(null);

    const randomDice = () => {
        
        if (first.current) {
            setValue(0);
            first.current = false;
            return;
        }

        const random = Math.floor(Math.random() * (diceImages.length  - 1)) + 1;
        
        setValue(random);
    };

    const callDice = () => {

        if (intervalTrue.current) return;

        intervalTrue.current = setInterval(randomDice, 1000);
    };

    return (
        <div style={{ margin:`10px` }}>
    
            <button onClick={callDice}>
            
                <img src={ diceImages[value] } alt="" style={{ with:`30px`, height:`30px` }}/>
    
            </button>
        </div>
    );
}

export default Dice;