import { useState } from "react"
import Dice0 from "../../assets/images/dice-empty.png"
import Dice1 from "../../assets/images/dice1.png"
import Dice2 from "../../assets/images/dice2.png"
import Dice3 from "../../assets/images/dice3.png"
import Dice4 from "../../assets/images/dice4.png"
import Dice5 from "../../assets/images/dice5.png"
import Dice6 from "../../assets/images/dice6.png"



const ThrowDice = () => {

    const diceArray = [Dice0, Dice1, Dice2, Dice3, Dice4, Dice5, Dice6]

    const [dice, setDice] = useState(Dice0)


    const randomDice = () => {
        setTimeout(() => {
            const randomNumb = Math.floor(Math.random() * diceArray.length)
            setDice(diceArray[randomNumb])

        }, "1000")

    }

    return (
        <div className="Dice">

            <img
                src={dice}
                alt="Dice"
                onClick={randomDice}
            />

        </div>
    )
}

export default ThrowDice





// setTimeout(() => {
//     console.log("Delayed for 1 second.");
// }, "1000");