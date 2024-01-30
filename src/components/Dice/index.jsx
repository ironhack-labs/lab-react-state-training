import './Dice.css'
import React, { useEffect, useState } from 'react'

import dice1 from '../../assets/images/dice1.png'
import dice2 from '../../assets/images/dice2.png'
import dice3 from '../../assets/images/dice3.png'
import dice4 from '../../assets/images/dice4.png'
import dice5 from '../../assets/images/dice5.png'
import dice6 from '../../assets/images/dice6.png'
import diceEmpty from '../../assets/images/dice-empty.png'

const Dice = () => {
  const [countOfClicks, setCountOfClicks] = useState(0)
  const [diceImage, setDiceImage] = useState(diceEmpty)
  const diceArr = [dice1, dice2, dice3, dice4, dice5, dice6]

  useEffect(() => {
    switch (countOfClicks) {
      case 0:
        setDiceImage(dice3);
        break;
      case 1:
        setDiceImage(diceEmpty)
        break
      default:
        setDiceImage(diceArr[Math.floor(Math.random() * diceArr.length)])
        break;
    }
  }, [countOfClicks])

  return (
    <div>
      <img onClick={() => setCountOfClicks(countOfClicks + 1)} src={diceImage} className='dice-img' />
    </div>
  )
}

export default Dice