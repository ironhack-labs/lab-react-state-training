import { useState } from "react";

export default function Dice() {

    const [display, setDisplay] = useState("src/assets/images/dice-empty.png")
    const roll = () => {
        let randomNumber = Math.floor(Math.random() * (6) + 1);
        setDisplay(`src/assets/images/dice${randomNumber}.png`)
    }
    return (
        <div className="dice">
            <img src={display} alt="dice" onClick={roll} />

        </div>
    );
}