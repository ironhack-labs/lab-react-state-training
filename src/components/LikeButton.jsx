
import { useState } from "react";


export default function LikeButton() {


 const [likes, setLikes] = useState(0);

    return (
        <button className="like" onClick={() => setLikes(likes + 1) } style={{ cursor: "pointer"}} >
        {likes} likes
        </button>
    )
}