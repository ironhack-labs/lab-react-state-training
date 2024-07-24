import { useState } from "react"

const DiscoButton = () => {
  const colors = ["purple", "blue", "green", "yellow", "orange", "red"]
  const [likes, setLikes] = useState(0)
  const [color, setColor] = useState(colors[0])
  const handleButton = () => {
    setLikes(likes + 1)
    setColor(colors[setRandomIndex()])
  }
  const setRandomIndex = () => {
    return Math.floor(Math.random() * 6)
  }
  const buttonStyle = {
    backgroundColor: color
  }
  return (
    <button onClick={handleButton} className="DiscoButton" style={buttonStyle}>{likes} Likes</button>
  )
}

export default DiscoButton