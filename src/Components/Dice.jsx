import EmpDice from "./../assets/images/dice-empty.png"
import dice1 from "./../assets/images/dice1.png"
import dice2 from "./../assets/images/dice2.png"
import dice3 from "./../assets/images/dice3.png"
import dice4 from "./../assets/images/dice4.png"
import dice5 from "./../assets/images/dice5.png"
import dice6 from "./../assets/images/dice6.png"
import { useState } from "react"

const Dice = () => {


    const RandomDice = [dice1, dice2, dice3, dice4, dice5, dice6]
    const roundDice = RandomDice[Math.floor(Math.random() * RandomDice.length)]
    console.log(roundDice)

    const [clickDice, setClickDice] = useState(0)

    const handleClickDice = () => {

        setClickDice(roundDice)

    }

    return (
        <div>
            <p>aqui estara el dado</p>
            <img onClick={handleClickDice} src={clickDice ? roundDice : EmpDice} alt="A dice" />



        </div>
    )
}
export default Dice