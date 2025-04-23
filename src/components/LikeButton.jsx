import React, { useState } from 'react';


function LikeButton() {
  
    const [counter, setCounter] = useState(0);
  
    const increaseCounter = () => {
      setCounter(counter + 1);
    };
  
    return (
        <span>
      <button onClick={increaseCounter}>{counter} Likes</button>
      </span>
    );
  }
  
  export default LikeButton;