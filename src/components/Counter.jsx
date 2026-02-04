import React, { useState } from 'react'

function Counter() {

    const [counter, updateCounter] = useState(0)
    const buttonStyle = {padding: "20px", backgroundColor: "blue", color: "white"}
    return (
        <div style={{display:"flex", gap: "20px"}}>
            <button style={buttonStyle} onClick={() => {updateCounter(counter - 1)}}>-</button>
            <p>{counter}</p>
            <button style={buttonStyle} onClick={() => {updateCounter(counter + 1)}}>+</button>
        </div>
    )

}

export default Counter