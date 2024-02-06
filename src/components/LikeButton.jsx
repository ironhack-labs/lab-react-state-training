import React, { useState } from 'react';

function LikeButton() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  return (
    <>
      <div>
        <h2>
          Iteration 1 ========== <br />
        </h2>
        <button onClick={() => setCount1(count1 + 1)}>{count1} Likes </button>
        <button onClick={() => setCount2(count2 + 1)}>{count2} Likes </button>
      </div>
    </>
  );
}

export default LikeButton;
