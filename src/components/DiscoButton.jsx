import { useState } from "react"

function DiscoButton() {

  const colors = ["purple", "blue", "green", "yellow", "orange", "red"]
  const randomColorIndex = Math.floor(Math.random() * colors.length)
  const randomColor = colors[randomColorIndex]

  const [ likes, setLikes ] = useState(0)
  const [ color, setColor ] = useState(randomColor)

    const handleLikes = () => {
      setLikes(likes + 1)
      setColor(randomColor)
    }

  return (
    <div className="disco-btn">
      <button style={{backgroundColor: color, color: "white"}} onClick={ handleLikes }>{likes} Likes</button>
    </div>
  )
}

export default DiscoButton