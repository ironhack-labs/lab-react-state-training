import { useState } from "react"


export default function LikeButton() {
  const [likes, setLikes] = useState(0);
  const [color, setColor] = useState('purple');
  
  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];
  const randomBackgroundColor = Math.floor(Math.random() * colors.length);

  function onClick () {
    setLikes(prev=> prev + 1)
    setColor(colors[randomBackgroundColor])
  }
  return <button style={{backgroundColor: color}}type="button" onClick={onClick}>{likes} likes</button>
}
