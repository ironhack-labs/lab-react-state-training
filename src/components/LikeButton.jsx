import { useState } from "react";

export default function LikeButton() {
  const colorsArr = ["purple", "blue", "green", "yellow", "orange", "red"];
  const randomColor = colorsArr[Math.floor(Math.random() * colorsArr.length)];

  const [color, setColor] = useState(randomColor);
  const [count, setCount] = useState(0);

  const changeColor = () => {
    setColor(randomColor);
  };

  return (
    <div>
      <button
        style={{ backgroundColor: `${color}` }}
        id="buttonStyle"
        onClick={() => {
          setCount(count + 1);
          changeColor();
        }}
      >
        {count} Likes
      </button>
    </div>
  );
}
