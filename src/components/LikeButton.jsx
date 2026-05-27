import { useState } from "react"

export function LikeButton() {
    const [likeCount,setLikeCount] = useState(0)

    const addCount = () =>{
        setLikeCount(likeCount + 1);
    }
    return(

        <button onClick={addCount}>{likeCount} Likes</button>
    )
}