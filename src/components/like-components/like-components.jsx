import { useState } from "react";
import "./like-components.css"

function LikeButton () {

const [like, setLike] = useState(0)

function likeCounter () {
    setLike(like +1); 
}

    return (

    <button className="button" onClick={likeCounter}>{like} likes </button>
    )
}

export default LikeButton