import { useState } from "react"

function Counter() {
    const[count,setCount]=useState(0)
  return (
    <>      
    <div style={{ display: "flex", flexDirection: "row" }}>
        <button onClick={()=> setCount(count-1)}>-</button>
        <h3> {count}  </h3>
        <button onClick={()=> setCount(count+1)}>+</button>
    </div>
    
    </>

  )
}
export default Counter