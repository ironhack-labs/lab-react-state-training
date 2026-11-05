import { useState } from "react"

function Counter() {

    const[counter,setCounter]=useState(0)

  
  return (
    <>
    <button onClick={()=>{if(counter>0){setCounter(counter-1)}}}>-</button>

    <span>{counter}</span>
    <button onClick={()=>setCounter(counter+1)}  > +</button>
    </>
  )
}
export default Counter