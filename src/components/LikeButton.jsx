import React, { useState } from 'react';
 
const LikeButton = () => {
    const [likes, setLikes] = useState(0);
    
    const counterClick = () => {
        setLikes(likes + 1)
    };
  
    return <button onClick={counterClick}>{likes} Likes </button>;  
  
};
 
export default LikeButton;