import "./LikeButton.css"
import { useState } from "react";

const LikeButton = () => {

    const [clickCount, setClickCount] = useState(0)

    const handleClick = () => {
        setClickCount(clickCount + 1)
    }

    return (
        <div className="LikeButton">
            <h1>LIKE</h1>
            <button onClick={handleClick}>{clickCount}likes</button>
        </div>
    )
}



export default LikeButton