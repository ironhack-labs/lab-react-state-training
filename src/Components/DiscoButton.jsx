import "./DiscoButton.css";
import { useState } from "react";

function DiscoButton() {
  const colorsArray = ["purple", "blue", "green", "yellow", "orange", "red"];
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(colorsArray[0]);
  return (
    <div className="button-wrapper">
        <button
        style={{ backgroundColor: color }}
        onClick={() => {
            setCount(count + 1);
            setColor(colorsArray[count % colorsArray.length]);
        }}
        >
        {count} Likes
        </button>
    </div>
  );
}

export default DiscoButton;
