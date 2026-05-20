import { useState } from "react"

function LikeButton() {

    const [likes, setLikes] = useState(0);

    const handleLikes = () => {
        setLikes(likes + 1);
    }
    return (
        <div>
            <button onClick={handleLikes}>{likes} likes</button>
        </div>
    );

}

export default LikeButton