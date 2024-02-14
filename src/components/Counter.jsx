import { useState } from "react"

function Counter() {

    const [currentCounter, setCurrentCounter] = useState(0)

    const handleIncrease = () => {
        setCurrentCounter(currentCounter + 1)
    }

    const handleDecrease = () => {
        setCurrentCounter(currentCounter - 1)
    }

  return (
    <div>
        <button onClick={handleIncrease}>➕</button><span> {currentCounter} </span><button onClick={handleDecrease}>➖</button>
    </div>
  )
}

export default Counter