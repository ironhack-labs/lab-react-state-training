import { useState } from "react";
import vide from "../assets/images/dice-empty.png";
import one from "../assets/images/dice1.png";
import two from "../assets/images/dice2.png";
import three from "../assets/images/dice3.png";
import four from "../assets/images/dice4.png";
import five from "../assets/images/dice5.png";
import six from "../assets/images/dice6.png";


function Dice () {
    const numbers = [one, two, three, four, five, six]
    const random = Math.floor(Math.random()*numbers.length)

    const [photo, setPhoto] = useState(false)
    return (
       <img className="dice" src={!photo ? vide : numbers[random]}alt="" onClick={
            () => {setTimeout(() => setPhoto(!photo), 1000)}
        }/>
    )

}

export default Dice