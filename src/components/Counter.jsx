import React from 'react'
import { useState } from 'react';
function Counter() {

  const [contador, setContador] = useState(0);

  const handleIncrease = () => {
    setContador(contador + 1);
  }
  const handleDecrease = () =>{
    setContador(contador -1);
  }
  return (
    <div id = "counter">

    <button onClick={handleIncrease}>+</button>
    <p>{contador}</p>
    <button onClick={handleDecrease}>-</button>

    </div>
    
  )
}

export default Counter