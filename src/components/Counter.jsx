import { useState } from "react"

function Counter(){

    const [count, setCount] = useState(0)
   
    return(
        <div className="countingBtns">
            
            <button type="button" onClick={()=> {count > 0 ? setCount(count - 1):setCount(0)
            
            }}>-</button>
            <div className="reasult">{count}</div>

            <button type="button" onClick={()=> {setCount(count + 1)}}>+</button>
     

        </div>
        
      
    )
}
export default Counter