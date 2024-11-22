import { useState } from "react";

function LikeButton({ colors }) {
    const [likes, setLikes] = useState(0);
    const [count, setCount] = useState(0);
    const handleLikes = () => {
        setLikes(likes + 1)
        if (count >= 5) {
            setCount(0)
        } else {
            setCount(count + 1)
        }
    };
    if (colors === undefined) {
        return (
            <>
                <button onClick={handleLikes} type="button">{likes} Likes</button>
            </>
        );
    } else {
        return (
            <>
                <button style={{
                    backgroundColor: colors[count]
                }} onClick={handleLikes} type="button">{likes} Likes</button>
            </>
        )
    }
}

export default LikeButton;