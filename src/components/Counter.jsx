import React, {useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <button onClick={()=>{setCount((count)=>count-1)}}> - </button>
            <h3> {`${count}`}</h3>
            <button onClick={()=>{setCount((count)=>count+1)}}> + </button>

        </div>
    )
}

export degault Counter