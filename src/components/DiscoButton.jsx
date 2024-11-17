import { useState } from "react";

function DiscoButton() {
  const [count, setCount] = useState(0);
  const [colorIndex, setColorIndex] = useState(0);

  const backgroundColorArr = [
    "purple",
    "blue",
    "green",
    "yellow",
    "orange",
    "red",
  ];

  const handleLikeBtn = () => {
    setCount(count + 1);

    let nextIndex = colorIndex + 1;
    if (nextIndex === backgroundColorArr.length) {
      nextIndex = 0;
    }

    setColorIndex(nextIndex);
  };

  return (
    <button
      className="m-2"
      onClick={handleLikeBtn}
      style={{ backgroundColor: backgroundColorArr[colorIndex] }}
    >
      {count} likes
    </button>
  );
}

export default DiscoButton;
