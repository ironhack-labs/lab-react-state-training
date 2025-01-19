import React, { useState } from "react";

function DiscoButton({ className = "" }) {
  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(colors[0]);

  const changeColor = () => {
    let rest = count % 6;
    setColor(colors[rest]);
  };

  return (
    <div>
      <button
        className="border border-black px-2 m-2 text-white"
        style={{ backgroundColor: `${color}` }}
        onClick={() => {
          setCount(count + 1);
          changeColor();
        }}
      >
        {`${count} Likes`}
      </button>
    </div>
  );
}

export default DiscoButton;
