import React, { useState } from 'react'
import firstDice from '../assets/images/dice-empty.png'
import dice1 from '../assets/images/dice1.png'
import dice2 from '../assets/images/dice2.png'
import dice3 from '../assets/images/dice3.png'
import dice4 from '../assets/images/dice4.png'
import dice5 from '../assets/images/dice5.png'
const Dice = () => {
  const [randomDice, setRandomDice] = useState(firstDice)
  const DicImg = [dice1, dice2, dice3, dice4, dice5]
  const chnageDic = () => {
    let indexDice = 0
    if (indexDice === 0 || indexDice > 6) {
      indexDice = Math.floor(Math.random() * 4)
    }
    console.log(indexDice, DicImg[0])
    setRandomDice(DicImg[indexDice])
    return indexDice
  }

  return (
    <div className='dice'>
      <img src={randomDice} alt='' onClick={chnageDic} />
    </div>
  )
}
export default Dice
