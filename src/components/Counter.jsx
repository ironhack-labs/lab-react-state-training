import {useState} from 'react'

function Counter() {

    const [currentNumber, setCurrentNumber] = useState(0)

    const handleAddNumber = () => {
        setCurrentNumber(currentNumber + 1)
    }

    const handleRestNumber = () => {
        setCurrentNumber(currentNumber - 1)
    }
  return (
    <div>
        <button onClick={handleRestNumber}>-</button>
        {currentNumber}
        <button onClick={handleAddNumber}>+</button>
    </div>
  )
}

export default Counter