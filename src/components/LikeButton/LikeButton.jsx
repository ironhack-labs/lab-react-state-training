import './../LikeButton/LikeButton.css'
import { useState } from "react"

const LikeButton = ({ bgColor }) => {
    const [likeCount, setLikeCount] = useState(0);

    function incrementLikes() {
        setLikeCount(prev => {
            return prev += 1;
        })
    }

    return (
        <div className="LikeButton">
            <button onClick={incrementLikes} style={{ backgroundColor: bgColor ? bgColor : null }}>{likeCount} Likes</button>
        </div >
    )
}

export default LikeButton