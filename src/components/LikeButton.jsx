import { useState } from "react";



function LikeButton(){
    const [like, setLike] = useState(0);

const updateLikes = ()=> {
setLike(like + 1); 
} 

let likeDisplay = <strong>{like} Likes</strong>
    return(
        <div>
        <button className="like-btn" onClick={updateLikes}>{likeDisplay}</button>
        </div>
    )
}

export default LikeButton;