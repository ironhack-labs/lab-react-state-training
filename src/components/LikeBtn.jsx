import React, { useState } from "react";
let LikeBtn = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Likes {count}
      </button>
    </>
  );
};
export default LikeBtn;
