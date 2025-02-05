import {useState} from 'react'

export default function DiscoButton() {

const colors = ["purple", "blue", "green", "yellow", "orange", "red"]

const [like, setLikes] = useState(0)

const [color, setColor] = useState(colors)

const handleClick = () => {
  setLikes(like+1)
  const random = colors[Math.floor(Math.random() * colors.length)]
  setColor(random)
}

  return (
      <button className="LikeButton" 
      onClick= {handleClick} 
      style= {{backgroundColor: color}}>
        {like} Likes
      </button>
  );
}