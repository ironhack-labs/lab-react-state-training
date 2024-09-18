import { useState } from "react"

function Counter() {

  let [contador, setContador] = useState(0)

  const handleIncrease = () => {
    setContador(contador + 1)
  }

  const handleDecrease = () => {
    setContador(contador - 1)
  }

  return (
    <div className="counter">
      <button disabled={contador<=0 ? true : false} onClick={handleDecrease}>-</button>
      <p style={{fontWeight: "bold"}}>{contador}</p>
      <button onClick={handleIncrease}>+</button>
    </div>
  )
}

export default Counter