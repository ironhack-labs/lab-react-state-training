import { useState } from "react";

function Dice(){

    const [diceURL, setUrl] = useState("./src/assets/images/dice-empty.png");

    const handleDice = () => {
        setUrl("./src/assets/images/dice-empty.png");

        let randomDice = Math.floor(Math.random()*6); 
        let timer = setTimeout(()=>{
            setUrl(`./src/assets/images/dice${randomDice}.png`)
            clearTimeout(timer);
        },1000)

    };

    return (
        <img onClick={handleDice} src={diceURL} alt="dice image" />
    );
}

export default Dice;