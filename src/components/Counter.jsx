import { useState } from "react"


function Counter() {

  let [ counter, setCounter ] = useState(0)

  const handleIncrease = () => {
    setCounter( counter + 1 )
  }

  const handleDecrease = () => {
    if(counter>0){
        setCounter( counter - 1 )
    }
    
  }

  return (
    <div className="container">
      
      <button className="btn" onClick={ handleIncrease }>+</button>
      <h1>{counter}</h1>
      <button className="btn" onClick={ handleDecrease }>-</button>
    </div>
  )
}

export default Counter