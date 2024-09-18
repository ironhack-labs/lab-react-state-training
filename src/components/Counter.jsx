import { useState } from "react"

function Counter() {

  const [ count , setCount ] = useState(0)

  return (
    <div style={{display:"flex", justifyContent:"space-between", border:"solid 3px blue", width:"200px", padding:"10px", height:"100px"}}>
      <button style={{backgroundColor:"blue",color:"white",width:"30%"}}
      onClick={ () => setCount( count - 1 )}>-</button>
      <p style={{width:"30%",textAlign:"center",fontSize:"2em"}}>{count}</p>
      <button style={{backgroundColor:"blue",color:"white",width:"30%"}}
      onClick={ () => setCount( count + 1 )}>+</button>
    </div>
  )
}

export default Counter