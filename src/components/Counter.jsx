import React, { useState } from "react"

export default function Counter() {

    const [count, setCount] = useState(0)

    function handleCounter() {

        if(count > 0) {setCount(count - 1)}
    }

    return (

        <div className="Counter">

            <p>

                <button onClick={() => handleCounter()}> - </button> 
                 { count } 
                <button onClick={() => setCount(count + 1)}> + </button> 

            </p>

        </div>
    )
}