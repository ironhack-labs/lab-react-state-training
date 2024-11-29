import { useState } from "react";

const DiscoButton = () => {
  const colours = ["purple", "blue", "green", "yellow", "orange", "red"];
  const [colour, setColour] = useState("blue");
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setColour(colours[Math.floor(Math.random() * colours.length)]);
    setCount(count + 1);
  };
  return (
    <button
      onClick={handleClick}
      style={{ color: "white", backgroundColor: colour }}
    >
      {count} likes
    </button>
  );
};

export default DiscoButton;
