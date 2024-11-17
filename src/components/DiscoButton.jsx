import { useState } from "react";
import "./DiscoButton.css";

function DiscoButton() {
  const colorArray = ["purple", "blue", "green", "yellow", "orange", "red"];
  const [color, setColor] = useState(colorArray[0]);

  const [count, setCount] = useState(0);

  function toggleColor() {
    const index = colorArray.indexOf(color);
    const nextIndex = colorArray.indexOf(color) + 1;
    if (index < colorArray.length) {
      setColor(colorArray[nextIndex]);
      setCount(count + 1);

      if (index === colorArray.length) {
        setColor(colorArray[0]);
        setCount(count + 1);
      }
    }
  }

  return (
    <>
      <button onClick={() => toggleColor()} className={color}>
        {count} Likes
      </button>
    </>
  );
}

export default DiscoButton;
