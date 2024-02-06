import React, { useState } from "react";
import './App.css';


function LikeButton(){
    
    // likeCount'u saklamak için state tanımla
    const [likeCount, setLikeCount] = useState(0);
  
    
    const handleLikeClick = () => {
     
      setLikeCount(likeCount + 1);
    };
  
    return (
      <div>
        
        <button onClick={handleLikeClick}>
          {likeCount} {likeCount === 1 ? 'Like' : 'Likes'}
        </button>
      </div>
    );
  };
  
  export default LikeButton;