
import React from 'react'

export const LikeButton = ({addLike, likeCounter}) => {
  return (
    <>
    <button className='likeBtn' onClick={addLike}>{likeCounter} likes</button>
    </>
  );
}
