import { useState } from "react"

function LikeButton(){
    const [count, setCount]= useState(0)

    return(
        <>
        

        <h1>Like Button</h1>

        <button className="likebtn" onClick={()=>setCount(count+1)}>{count} Like</button> 
        
        </>
    )

}

export default LikeButton