import React, { useState } from 'react';

 
function LikeButton() {
  const [count, setCount] = useState(0);
  return (

    <div className="LikeButton">
   
      <button onClick={() => setCount(count + 1)}> {count} likes </button>

    </div>
  );
}

export default LikeButton;