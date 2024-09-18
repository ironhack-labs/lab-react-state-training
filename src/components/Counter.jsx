import { useState } from "react"


function Counter() {
    const [counter, setCounter] = useState(0)
    return (
        <div style = {{border:"solid 1px blue", display:"flex", width:"150px", justifyContent:"space-around", padding:"15px"}}>
            <button onClick={()=>counter > 0 && setCounter(counter - 1)} style={{width:"40px", height:"40px", backgroundColor:"blue", color:"white"}}> - </button>
            <div>{counter}</div>
            <button onClick={()=>setCounter(counter + 1)} style={{width:"40px", height:"40px", backgroundColor:"blue", color:"white"}}> + </button>
        </div>
    )
}

export default Counter