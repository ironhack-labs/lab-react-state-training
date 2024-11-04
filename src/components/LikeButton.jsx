import { useState } from "react"

const LikeButton = ({bgColor}) => {
  const [likeCount, setLikeCount] = useState(0);

  function incrementLikes (){
    setLikeCount(prev =>{
        return prev+=1;
    })
  }

  return (
    <button onClick={incrementLikes} className="like-button" style={{backgroundColor : bgColor ? bgColor : null}}>{likeCount} Likes</button>
  )
}

export default LikeButton