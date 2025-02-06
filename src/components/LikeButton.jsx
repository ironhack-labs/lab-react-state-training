import { useState } from "react";

export default function LikeButton() {
    const [likes, setLikes] = useState(0);

    const handleLikesCount = (like) => like + 1;
    return (
        <>
            <button onClick={() => setLikes(handleLikesCount(likes))}>{likes} Likes</button>
        </>
    );
}