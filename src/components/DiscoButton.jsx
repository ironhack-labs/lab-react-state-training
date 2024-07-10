import { useState } from "react";

export default function DiscoButton() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("purple");
  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

  const increment = () => {
    setCount(count + 1);
  };

  const changeColor = () => {
    const randInd = Math.floor(Math.random() * colors.length);
    setColor(colors[randInd]);
  };

  return (
    <button
      onClick={() => {
        increment();
        changeColor();
      }}
      style={{ backgroundColor: color }}
    >
      {count} Likes
    </button>
  );
}
