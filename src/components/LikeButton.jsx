import { useState } from "react";

export default function LikeButton() {
    const[likes, setLikes] = useState(0);

    return(
        <button className="LikeButton" onClick={() => setLikes(likes + 1)}>{likes} likes</button>
    );
}