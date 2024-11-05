import './../Dice/Dice.css'
import diceEmpty from './../../assets/images/dice-empty.png'
import dice1 from './../../assets/images/dice1.png'
import dice2 from './../../assets/images/dice2.png'
import dice3 from './../../assets/images/dice3.png'
import dice4 from './../../assets/images/dice4.png'
import dice5 from './../../assets/images/dice5.png'
import dice6 from './../../assets/images/dice6.png'
import { useState } from "react";

const Dice = () => {
    const [diceNroImagen, setDiceNroImagen] = useState(diceEmpty);

    function updateImage() {

        let ArrImage = [dice1, dice2, dice3, dice4, dice5, dice6];

        let imageRef = Math.floor(Math.random() * ArrImage.length);

        setDiceNroImagen(ArrImage[imageRef]);
    }

    return (

        <div className="Dice" onClick={updateImage}>

            <img src={diceNroImagen} alt="Dice" />

        </div>

    )

}

export default Dice