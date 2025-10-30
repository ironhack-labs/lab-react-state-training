import { useState } from "react"

function Counter (){
    const [counter,setCounter]= useState(0)

      const increment = () => setCounter(counter + 1);
const decrement = () => {
  if (counter > 0) {
    setCounter(counter - 1);
  }
}

return(
    <div style={{ textAlign: "center", marginTop: "50px" }}>
         <button onClick={increment}>+</button>
      <h2>{counter}</h2>
      <button onClick={decrement}>-</button>
    </div>
)
}
export default Counter