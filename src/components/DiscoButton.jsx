import { useState } from "react";

export default function DiscoButton() {

    const color = ["purple", "blue", "green", "yellow", "orange", "red"]
    const [colorIndex, setColorIndex] = useState(0)
    const [likes, setLikes] = useState(0)

    const handleCLick = () => {
        setColorIndex((prevIndex) => (prevIndex + 1) % color.length)
        setLikes((prevLikes) => prevLikes + 1)
    }

    const color2 = ["purple", "blue", "green", "yellow", "orange", "red"]
    const [colorIndex2, setColorIndex2] = useState(0)
    const [likes2, setLikes2] = useState(0)

    const handleCLick2 = () => {
        setColorIndex2((prevIndex2) => (prevIndex2 + 1) % color.length)
        setLikes2((prevLikes2) => prevLikes2 + 1)
    }

    return (
        <div>
        <button id="button" onClick={handleCLick} style={{backgroundColor: color[colorIndex], color: "white"}}>{likes}</button>
        <button id="button" onClick={handleCLick2} style={{backgroundColor: color2[colorIndex2], color: "white"}}>{likes2}</button>
        </div>

    )
    
}