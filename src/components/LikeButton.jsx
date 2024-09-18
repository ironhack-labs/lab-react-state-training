import { useState } from "react"

function LikeButton() {

    const [numLikes, setNumLikes] = useState(0)
    return (
    <button onClick={()=>setNumLikes(numLikes + 1)}>{numLikes} Likes</button>
    )
    }

    export default LikeButton