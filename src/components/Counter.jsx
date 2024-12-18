import { useState } from "react";

function Count(){
    const [count, setCount] = useState(0)
    const increaseCount = ()=> {
        setCount(count +1)
    }
    const decreaseCount = ()=> {
        if(count > 0){
          setCount(count - 1)  
        }
        
    }

    return(
        <div>
          <button onClick={increaseCount}> + </button>
          <p> {count}  </p> 
          <button onClick={decreaseCount}> - </button>  
        </div>
        
    )
}
export default Count;