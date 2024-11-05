import React, { useState } from 'react'
import './DiscoButton.css'

const colors = ["purple", "blue", "green", "yellow", "orange", "red"]

const DiscoButton = () => {
    const [likes, setLikes] = useState(0)
    const [bgColor, setBgColor] = useState(colors[0])

    const handleLike = () => {
        setLikes(likes + 1)
        const randomColor = colors[Math.floor(Math.random() * colors.length)]
        setBgColor(randomColor)
    }

    return (
        <button
            style={{ backgroundColor: bgColor }}
            onClick={handleLike}
            className="disco-button"
        >
            {likes} Likes
        </button>
    )
}

export default DiscoButton
