import { useState } from "react"
import './Counter.css'

const Counter = ()=>{

    const[counter, setCounter]= useState(0)

    const add = ()=>{
        setCounter(counter + 1)
    }

    const rest = ()=>{
        counter >= 0 && setCounter(counter - 1)
    }


    return(
        <div className="container">
            <button onClick={add}>sum</button>
            <p className="num">{counter}</p>
            <button onClick={rest}>rest</button>
        </div>
    )
}
export default Counter