import { useState } from "react"

function DiscoButton() {

    const bgButton = ["purple", "blue", "green", "yellow", "orange", "red"]

    function randomColor() {
        const roll = Math.floor(Math.random() * 6)
        return bgButton[roll]
    }

    function handleButton() {
        setLikes(likes + 1)
        setBgColor(() => randomColor())
    }

    const [likes, setLikes] = useState(0)
    const [bgColor, setBgColor] = useState(randomColor())

    return (
        <div>
            <button
                className="btn-disco"
                type="button"
                style={{ backgroundColor: `${bgColor}` }}
                onClick={handleButton}>
                {likes} Likes
            </button>
        </div>
    )

}

export default DiscoButton