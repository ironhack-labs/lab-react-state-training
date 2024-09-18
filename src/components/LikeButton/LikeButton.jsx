import React, { useState } from "react";

export const LikeButton = () => {
  const [cont, setCont] = useState(0);

  const handleClick = () => {
    setCont(cont + 1);
  };
  return (
    <>
      <button onClick={handleClick}>{cont} Likes</button>
    </>
  );
};
