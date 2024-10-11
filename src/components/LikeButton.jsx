import React, { useState } from 'react';

const LikeButton = () => {
  const [likes, setLike] = useState(0);
  const handelClick= ()=>{
    setLike(likes +1)
  }
  return (
    <button onClick={handelClick}>
    {likes} Likes
    </button>
  )

}

export default LikeButton;
