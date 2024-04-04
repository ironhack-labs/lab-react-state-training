import { useState } from "react";
import "./LikeButton.css"
const colors = ["purple", "blue", "green", "yellow", "orange", "red"]


function LikeButton (){
const [likes, setLikes]= useState(0);
const handleClick = () => { setLikes(likes + 1) }
    return (


<button type="button" className="like-button" onClick={handleClick} >
          {likes} Likes
        </button>

    )
}

export default LikeButton;