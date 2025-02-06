import React, { useState } from 'react'

function CounterButton() {
    const [count, setCount] = useState(0);

    const minus = () => {
        setCount((prevNumb) => prevNumb - 1);
    }

    const plus = () => {
        setCount((prevNumb) => prevNumb + 1);
    }
    
  return (
    <>
        <button className='increment' disabled={count === 0} onClick={ minus }>-</button>
        <span className='number'> { count } </span>
        <button className='decrement' onClick={ plus }>+</button>
    </>
  )
}

export default CounterButton