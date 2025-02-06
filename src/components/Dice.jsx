
import React, { useState } from "react";
//import maxence from "../assets/images/maxence.png"
//import maxence_glasses from "../assets/images/maxence-glasses.png"
import dice_empty from "../assets/images/dice-empty.png"
import dice1 from "../assets/images/dice1.png"
import dice2 from "../assets/images/dice2.png"
import dice3 from "../assets/images/dice3.png"
import dice4 from "../assets/images/dice4.png"
import dice5 from "../assets/images/dice5.png"
import dice6 from "../assets/images/dice6.png"

export default function Dice() {

    const dado = [dice1, dice2, dice3, dice4, dice5, dice6]
    //Math.floor(Math.random() * 6)
    const [showFace, setShowFace] = useState(dice_empty);

    const toggleFace = () => {
        setShowFace(dice_empty)
        setTimeout(() => {
            setShowFace(dado[Math.floor(Math.random() * 6)])

        }, 1000);
    };

    return (
        <div className="Dice">
            <img src={showFace} onClick={toggleFace} />
        </div>
    )
}