import { useState } from "react";

export default function DiscoButton() {
    const [likes, setLikes] = useState(0)
    const [current, setCurrent] = useState(0)
    const colors = ["purple", "blue", "green", "yellow", "orange", "red"]

    const handleClick = () => {
        setLikes(likes + 1)
        setCurrent(current >= 5 ? 0 : current + 1)
    }

    return (
        <div>
            <button
                onClick={handleClick}
                style={{ backgroundColor: colors[current] }}
                >
                {likes} Likes
            </button>                
        </div>
    )
}
