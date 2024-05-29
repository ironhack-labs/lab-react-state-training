import React, { useState } from 'react'

const LikeButton = () => {
    const [like, setLike] = useState(0)
    const [like2, setLike2] = useState(0)
  return (
    <div>
        <button onClick={()=>{setLike((count)=>count + 1)}}>{`${like}`} Likes</button>
        <button onClick={()=>{setLike2((count)=>count + 1)}}>{`${like2}`} Likes</button>
    </div>
  )
}

export default LikeButton