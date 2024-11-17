import React, {useState} from "react"

function LikeButton () {
    const [likes, setLikes] = useState(0);

    function clickCount () {
        setLikes (likes + 1)
    }

    return (
        <button onClick={clickCount}>
          {likes} Likes
        </button>
      );
    }
    



   
     
    
    export default LikeButton;