import { useState } from 'react'

function Counter() {
     const [ counterValue, setCounterValue ] = useState(0)

const handleIncreaseCounter = () => {
 setCounterValue(counterValue + 1)
}

const handleDecreaseCounter = () => {
      if (counterValue <= 0) {
return;
      }

  setCounterValue(counterValue - 1)
  }

  return (
    <div>

      <h1>{counterValue}</h1>

      <button onClick={ handleDecreaseCounter }>-</button>
      <button onClick={ handleIncreaseCounter }>+</button>

    </div>
  )
}

export default Counter
