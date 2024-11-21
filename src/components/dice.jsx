import { useState } from "react";

function Dice({className = ""}) {
    const [diceState, setDice] = useState(Math.floor(Math.random() * 6 + 1));
    const [isRollInProgress, setIsRollInProgress] = useState(false);


    const rollDice = () => {
        if (isRollInProgress) return;
        
        setIsRollInProgress(true);
        setDice(0);

        setTimeout(() => {
            setDice(Math.floor(Math.random() * 6 + 1));
            setIsRollInProgress(false);
        }, 1000);
    };
    
    return (
            <button className= {`w-25 p-0 border-0 bg-transparent ${className}`} onClick={rollDice}>
                <img  className="w-100" src={diceState > 0 ? `/src/assets/images/dice${diceState}.png` : "/src/assets/images/dice-empty.png"} alt="glasses" />
            </button>
    );
}

export default Dice;