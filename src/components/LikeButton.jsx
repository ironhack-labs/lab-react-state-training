import React, {useState} from "react";

function LikeButton(){

    const [likes, setLikes] = useState(0);

    const countLikes = () =>{
        setLikes(likes + 1);
    }

    return(
        <div>
            <button onClick={countLikes}>{likes} likes</button>
        </div>
    )
}

export default LikeButton