import {useState} from 'react'

export default function LikeButton() {

const [like, setLikes] = useState(0)

const handleClick = () => {
  setLikes(like+1)
}
  return (
      <button className="LikeButton" onClick= {handleClick}>{like} Likes</button>
  );
}