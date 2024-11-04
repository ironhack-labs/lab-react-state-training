import { useState } from "react";

export const LikeButton = () => {
  const [count, setCount] = useState(0);

  const random = Math.floor(Math.random() * 6);
  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];
  const [currColor, setCurrColor] = useState(colors[random]);

  const setRandomColor = () => {
    const random = Math.floor(Math.random() * 6);
    setCurrColor(colors[random]);
  };

  function addLike() {
    setCount((prev) => prev + 1);
    setRandomColor();
  }

  return (
    <button onClick={addLike} className="btn-like" style={{ backgroundColor: currColor }}>
      {count} Likes
    </button>
  );
};
