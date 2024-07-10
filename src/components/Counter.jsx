import React from 'react'
import { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)

    function addCount(){
            setCount(count +1)
        }

    function lowerCount(){
        if(count<= 0){
            return
        }else{
            setCount(count -1)
        }
    }


  return (
    <div id='count'>
        <button onClick={lowerCount} >-</button>
        <p>{count}</p>
        <button onClick={addCount} >+</button>
    </div>
  )
}

export default Counter