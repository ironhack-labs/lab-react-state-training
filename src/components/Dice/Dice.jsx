import { useState } from 'react'
import './Dice.css'
import diceEmpty from './../../assets/images/dice-empty.png'
import dice1 from './../../assets/images/dice1.png'
import dice2 from './../../assets/images/dice2.png'
import dice3 from './../../assets/images/dice3.png'
import dice4 from './../../assets/images/dice4.png'
import dice5 from './../../assets/images/dice5.png'
import dice6 from './../../assets/images/dice6.png'

const Dice = ()=>{

    const[stateIndex, setState]= useState(0)
    const arrDice = [diceEmpty, dice1, dice2, dice3, dice4, dice5, dice6]

    const changeDice = ()=>{
        setState(0)
        setTimeout(()=>{
            let indexRandom = Math.floor(Math.random() * arrDice.length)
            console.log('indexRandom', indexRandom)
            setState(indexRandom)
        }, 1000)
    }

    return(
        <img className='imgDice' src={arrDice[stateIndex]} alt="img" onClick={changeDice}/>
    )
}
export default Dice