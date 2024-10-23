import { useState } from "react";


function LikeButton (){
    
    const [likes, setLikes] = useState(0);

    const increaseLikes = () => {
        setLikes(likes +1);
    }



    return (
        <>
            <button className="likeButton" onClick={increaseLikes}>{likes} Likes</button>
        </>
    )
}

export default LikeButton;