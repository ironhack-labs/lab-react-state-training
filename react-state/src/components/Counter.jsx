import React, { useState } from 'react'

function Counter() {
    let [counter, setCounter]=useState(0)
    const handleIncrease=()=>{
        setCounter (counter+1)
    }
    
    const handleDecrease = () => {
        setCounter( counter - 1 )
    }
  return (
    <div>
      <button onClick={handleIncrease} style={{backgroundColor:"blue"}}>+</button>{counter}
      <button onClick={handleDecrease}style={{backgroundColor:"blue"}}>-</button> 
    </div>
  )
}

export default Counter
