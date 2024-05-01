import { useState } from "react"
import './LikeButton.css'

const LikeButton = ()=>{
    const[counter, setCounter]= useState(0)

    const changeState = ()=>{
        setCounter(counter +1)
    }

    return(
        <button onClick={changeState}>{counter} Like</button>
    )
}
export default LikeButton