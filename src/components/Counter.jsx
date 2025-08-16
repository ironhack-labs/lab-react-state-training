import { useState } from "react"

function Counter() {
    const [value, setValue] = useState(0)

    const handleDecrease = () => {value !== 0 ?  setValue(value - 1): value}
    const handleIncrease = () => {setValue(value + 1)}
  return (
        <div className="counter-box">
            <button onClick={handleDecrease}> - </button>
            <p>{value}</p>
            <button onClick={handleIncrease}> + </button>
        </div>

  )
}
export default Counter