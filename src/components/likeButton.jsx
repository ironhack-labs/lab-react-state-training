import React, { useState } from 'react'

const LikeBtn = () => {
  const [like, setLike] = useState(0)
  const [liket, setLiket] = useState(0)
  const increaseLike1 = () => {
    setLike(like + 1)
  }
  const increaseLike2 = () => {
    setLiket(liket + 1)
  }
  return (
    <>
      <button onClick={increaseLike1}>{like} likes</button>
      <button onClick={increaseLike2}>{liket} likes</button>
    </>
  )
}
export default LikeBtn
