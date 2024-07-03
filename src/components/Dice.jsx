import { useState } from "react";
import empty from "../assets/images/dice-empty.png"
import one from "../assets/images/dice1.png"
import two from "../assets/images/dice2.png"
import three from "../assets/images/dice3.png"
import four from "../assets/images/dice4.png"
import five from "../assets/images/dice5.png"
import six from "../assets/images/dice6.png"

const Dice = () => {
    const [dice, setDice] = useState(empty)
    const diceArray = [one, two, three, four, five, six]

    const click = () => {
        if (dice === empty) {
            setDice(diceArray[Math.floor(Math.random()*diceArray.length)])

        } else {
            setDice(empty)
        }
    }

    return ( 
        <div className="dice">
            <img className="diceImg" src = {dice} onClick={() => {
                click()
            }}/>
        </div>
     );
}
 
export default Dice;