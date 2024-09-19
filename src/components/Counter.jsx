import React from 'react'
import { useState } from 'react'

function Counter() {
let [count, setCount] = useState(0)

const handleIncrease = () => {
    setCount(count + 1)
}

    const handleDecrease = () => {
        setCount(count - 1)

}

    return(
<div className='count' style={{display:"flex", alignItems:"space-between", gap:"20px" }}>
<button disabled={count <= 0 } onClick={ handleDecrease } className='decrease' style={{backgroundColor:"blue", color:"white", height:"50px", width:"50px",  }}><h1>-</h1></button>
    <h1>{count}</h1>
    <button onClick={ handleIncrease } className='increase' style={{backgroundColor:"blue", color:"white", height:"50px", width:"50px"}} ><h1>+</h1></button>
</div>
    )
}

export default Counter