import { useState } from "react";

export default function LikeButton(){
    const [likeCount, setLikeCount] = useState(0);

    const liked = ()=>{
        setLikeCount(likeCount +1);
    }
    return(
        <>
            <button onClick={liked}>{likeCount} Likes</button>
        </>
    )
}