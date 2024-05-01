import { useState } from "react"
import emptDice from './../assets/images/dice-empty.png'
import diceone from './../assets/images/dice1.png'
import dicetwo from './../assets/images/dice2.png'
import dicethree from './../assets/images/dice3.png'
import dicefour from './../assets/images/dice4.png'
import dicefive from './../assets/images/dice5.png'
import dicesix from './../assets/images/dice6.png'



const Dice = () => {


    const [diceIndex, setDiceIndex] = useState(0)
    const totalDice = [emptDice, diceone, dicetwo, dicethree, dicefour, dicefive, dicesix]

    const whatever = () => {

        const randomIndex = Math.floor(Math.random() * 6) + 1
        setDiceIndex(randomIndex)


    }


    return (
        <div className="dice">
            <img
                src={totalDice[diceIndex]}
                onClick={() => setTimeout(whatever, 1000)}
                alt="Dice" />
        </div>
    );
}

export default Dice