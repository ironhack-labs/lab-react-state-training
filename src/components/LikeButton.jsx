import { useState } from 'react';
export default function LikeButton(){
    const [likeButton, setLikebutton] = useState(0)
    return(
        
        <div>
            <button onClick={()=>setLikebutton(likeButton +1)}>{likeButton} Likes</button>
        </div>
    )
}