import React from 'react'
import { useState } from 'react'

function Counter() {

    const [displayCount, setDisplayCount] = useState(0);

    const increment = () =>{


        setDisplayCount(displayCount + 1)
    }

    const decrement = () => {

        if(displayCount>0)

        setDisplayCount(displayCount - 1)

    }
  return (
    //<div>Counter</div>
    <>
    <div className='container'>
        <button className='btn' onClick={decrement}>-</button>
        <p>{displayCount}</p>
        <button className='btn' onClick={increment}>+</button>

    </div>
    
    </>
  )
}

export default Counter