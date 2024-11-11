import { useState } from "react";

const DiscoButton = ({increment, likes, setLikes}) => {
const arrayOfColors = ["purple", "blue", "green", "yellow", "orange", "red"];
const randomColor = arrayOfColors[Math.floor(Math.random() * arrayOfColors.length)];

const likeButton = document.querySelector(".disco")
const [backgroundColor, setBackgroundColor] = useState('white')

function handleClick() {
    setLikes(likes + 1)
    setBackgroundColor(randomColor)
} 

  return (
    <div>
        <button className="disco" style={{backgroundColor: backgroundColor}}onClick={handleClick}>{likes} Likes</button>
    </div>
  )
}

export default DiscoButton