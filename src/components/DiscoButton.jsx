import { useState } from "react";

const DiscoButton = () => {
  const [count, setCount] = useState(0);
  const colorsArray = ["purple", "blue", "green", "yellow", "orange", "red"];
  const [color, setColor] = useState("");

  function incrementCount() {
    setCount(count + 1);
  }

  function changeBackground() {
    const randomIndex = Math.floor(Math.random() * colorsArray.length);
    setColor(colorsArray[randomIndex]);
  }

  return (
    <button
      type="button"
      style={{ backgroundColor: color }}
      onClick={() => {
        incrementCount;
        changeBackground();
      }}
    >
      {count} Likes
    </button>
  );
};

export default DiscoButton;
