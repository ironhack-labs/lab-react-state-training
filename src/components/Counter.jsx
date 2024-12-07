import React, { useState } from "react";

function Counter() {

    const [counter , setCounter] = useState(0)
    
    function sum () {
        setCounter ( counter + 1 )
    }
    function decrease () {
        if (counter !== 0 ){
         setCounter ( counter - 1 )
        }
       
    }

    return  (
    <div style={{ display: 'flex'}}>
        <button onClick={sum}>+</button>
        <p>{counter}</p>
        <button onClick={decrease} >-</button>
    </div>
  )  
}
export default Counter