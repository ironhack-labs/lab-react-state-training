import { useState } from "react"


function Counter() {
  const [contador, functionContador] = useState(0)

  const handleSumar = () => {
    functionContador(contador + 1)
  }

  const handleRestar = () => {
    if(contador === 0){
      return
    }
    functionContador(contador - 1)
  }

  return (
    <div className="divCounter">
        <button onClick={handleSumar}>+</button>
        <h1>{contador}</h1>
        <button onClick={handleRestar}>-</button>
    </div>
  )
}

export default Counter