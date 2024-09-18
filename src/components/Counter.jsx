import { useState } from 'react'



function Counter() {

  const [ counter, setCounter ] = useState(0)

  const handleIncrease = () => {
    setCounter ( counter + 1 )
  }

  const handleDecrease = () => {
    setCounter (counter - 1)
  }

  return (
    <div className='counter-container'>
      <button className='counter-button' disabled={counter <= 0 ? true : false} onClick={handleDecrease}> - </button>
      <h2>{counter}</h2>
      <button className='counter-button' onClick={handleIncrease}> + </button>
    </div>
  )
}

export default Counter