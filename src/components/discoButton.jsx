import { useState } from "react";
const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

function DiscoButton() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(colors[0]);

  const handleLike = () => {
    const num = Math.floor(Math.random() * 6);
    setColor(colors[num]);
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleLike} style={{ backgroundColor: color }}>
        {count} likes
      </button>
    </div>
  );
}

export default DiscoButton;
