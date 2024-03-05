import React, { useState } from 'react';

const LikeButton = () => {
    
    const [likes, setLikes] = useState(0);

    const addLikeClick = () => {
        setLikes(likes + 1)
    }

    return (
    <button className='like' onClick={addLikeClick}> Like {likes} </button>      
    )
    
}

export default LikeButton