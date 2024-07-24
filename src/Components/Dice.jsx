import { useState } from "react"
import DiceImage1 from '../assets/images/dice1.png'
import DiceImage2 from '../assets/images/dice2.png'
import DiceImage3 from '../assets/images/dice3.png'
import DiceImage4 from '../assets/images/dice4.png'
import DiceImage5 from '../assets/images/dice5.png'
import DiceImage6 from '../assets/images/dice6.png'
import DiceEmpty from '../assets/images/dice-empty.png'


const diceArray = [{DiceImage1},{DiceImage2},{DiceImage3},{DiceImage4},{DiceImage5},{DiceImage6}]






function Dice () {
    const [click , setClick] = useState({DiceImage1})
    return (
        <>

        <img onClick={() => setClick (DiceEmpty)} src={click} alt="" />


        </>
    )
}
export default Dice