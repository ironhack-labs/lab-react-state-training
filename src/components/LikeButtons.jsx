import React, { useState } from "react";

const LikeButtons = () => {
  const [likes1, setLikes1] = useState(0);
  const [likes2, setLikes2] = useState(0);

  const handleLikesClick1 = () => {
    setLikes1(likes1 + 1);
  };

  const handleLikesClick2 = () => {
    setLikes2(likes2 + 1);
  };

  return (
    <div>
      <button onClick={handleLikesClick1}>
        {`${likes1} ${likes1 === 1 ? "Like" : "Likes"}`}
      </button>
      <button onClick={handleLikesClick2}>
        {`${likes2} ${likes2 === 1 ? "Like" : "Likes"}`}
      </button>
    </div>
  );
};

export default LikeButtons;
