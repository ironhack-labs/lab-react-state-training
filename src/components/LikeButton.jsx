import { useState } from "react"

function LikeButton(){
    const [counter, setCounter] = useState(0)
    function HandleClick(){
        setCounter(prevCounter => prevCounter + 1)
    }
    return(
        <button onClick={HandleClick}>{counter} Likes</button>
    )
}

export default LikeButton