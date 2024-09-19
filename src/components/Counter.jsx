import React, { useState } from 'react'

export default function () {

    const [incrementOrD, setIncrementOrD] = useState(0)
    
    const handleIncrement = () => {

            setIncrementOrD(incrementOrD + 1)
    }
    const handleDecrement = () => {

        setIncrementOrD(incrementOrD - 1)
    }



  return (
    <div style={{display: 'flex', flexDirection: 'row' }}>
        <button onClick={handleDecrement}>-</button><h3>{incrementOrD}</h3><button onClick={handleIncrement}>+</button>
    </div>
  )
}
