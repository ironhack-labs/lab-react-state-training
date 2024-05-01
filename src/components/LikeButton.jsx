import { useState } from "react"

function LikeButton (){
    const [counter,Setcounter] = useState(0)
    const addLike = () => {
        Setcounter(counter + 1)
    }
    

    return (
        <>
        <div>
        <button onClick={addLike}>{counter} Likes</button>
        </div>
        </>
    )
}

export default LikeButton
