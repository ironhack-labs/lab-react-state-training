import React, { useState } from "react";

function DiscoButton() {
  const [color, setColor] = useState("red");
  const [count, setCount] = useState(0);

  function pickRandom() {
    const colors = ["purple", "blue", "green", "yellow", "orange", "red"];
    const randomNumber = Math.floor(Math.random() * colors.length);
    setColor(colors[randomNumber]);
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div>
      <button style={{ backgroundColor: color }} onClick={pickRandom}>
        {count} Likes
      </button>
    </div>
  );
}

export default DiscoButton;
