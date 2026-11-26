import { useState } from "react"

function DiscoButton () {
    const [likes, setLikes] = useState(0)

    const colors = ["purple", "blue", "green", "yellow", "orange", "red"]

    const [selectedColor, setSelectedColor] = useState("")

    const handleLikes = () => {
        setLikes(likes + 1)
        handleColor()
    }

    const handleColor = () => {
        setSelectedColor(colors[likes % colors.length])
    }

    const buttonStyles = {
        backgroundColor: selectedColor,
    }

    return <button style={buttonStyles} onClick={handleLikes}> {likes} Likes </button>
}

export default DiscoButton