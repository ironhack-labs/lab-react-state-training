import { useState } from 'react'
import emptyDice from './assets/images/dice-empty.png'
import dice1 from './assets/images/dice1.png'
import dice2 from './assets/images/dice2.png'
import dice3 from './assets/images/dice3.png'
import dice4 from './assets/images/dice4.png'
import dice5 from './assets/images/dice5.png'
import dice6 from './assets/images/dice6.png'


const divStyle = {
    width: '150px',
    height: '200px',
}
function Dice() {
    const [currentDice,setCurrentDice] = useState(emptyDice)

    const handleRandomDice = () => {
        setCurrentDice(emptyDice)
        const randomNumber = Math.floor(Math.random() * 6) + 1
        if (randomNumber === 0){
                handleRandomDice()
            } else {
                setTimeout(()=>{
                    setCurrentDice(randomNumber === 1? dice1: randomNumber === 2?dice2:randomNumber === 3?dice3:randomNumber === 4?dice4:randomNumber === 5?dice5:randomNumber === 6?dice6:null)
                },1000)
            }
    }

  return (
    <div style={divStyle} onClick={handleRandomDice}>
        <img style={{width:'100%'}} src={currentDice} alt="" />
    </div>
  )
}

export default Dice
