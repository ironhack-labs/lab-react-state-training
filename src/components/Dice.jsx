import React, {useState} from 'react'

export const Dice = ({randomNumber}) => {
    
    const [randomDice, setRandomDice] = useState(randomNumber())
  return (
    <>
    <img src={`./src/assets/images/dice${randomDice}.png`} alt="" onClick={()=>{
        setRandomDice("-empty")
        setTimeout(()=> setRandomDice(randomNumber), 1000)
        
    }}/>
    </>
  )
}
