import React, { useState } from 'react';

function Dice() {
    const [roll, setRoll] = useState(0);
    const rolling = () => {
        setTimeout(() => setRoll(random()), 1000);
        setRoll(0);
    }

    return (
        <div>
            <img style={{width: "200px", height: "200px"}} onClick={rolling} src={roll ? `src/assets/images/dice${roll}.png` : "src/assets/images/dice-empty.png"} alt={`Dice ${roll}`}></img>
        </div>
    );
}

function random() {
    return Math.floor(Math.random() * 6) + 1;
}

export default Dice;
