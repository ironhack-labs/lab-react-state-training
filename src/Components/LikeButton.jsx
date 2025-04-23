import { useState } from "react";

function LikeButton(){
    const [counter, setCounter]= useState(0)
    
    const increaseLikes= ()=>{
        setCounter(counter +1)
    }
    return(
        <>
        <button onClick={increaseLikes}>{counter} Likes </button>
        </>
    )
}

export default LikeButton;