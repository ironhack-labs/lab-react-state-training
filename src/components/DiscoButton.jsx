import { useState } from "react"

function DiscoButton() {
    const colors = ["purple", "blue", "green", "yellow", "orange", "red"];
    const [likes, setLikes] = useState(0)
    const [color, setColor] = useState(colors[0])

    let randomColor = ""
    const handleClick = () => {
        randomColor = colors[Math.floor(Math.random() * colors.length)];   
        setLikes(likes+1)
        setColor(randomColor)
    }
    
    return (
    <div>
        <button onClick={handleClick} style={{backgroundColor: color, color:"white"}}>
        {likes} Likes
        </button>
    </div>
  )
}
export default DiscoButton