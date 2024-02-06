import { useState } from 'react'
import "./likeButton.css"

function LikeButton(props){
    const[likeCount, setLikeCount] = useState(0);
    return (
        <button className='like-btn' onClick={()=>setLikeCount(likeCount+1)}>{likeCount} Likes</button>
    )
}

export default LikeButton;