import { useState } from "react";

export default function DiscoButton() {
  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState(colors[0]);

  const swap = () => {
    const random = Math.floor(Math.random() * colors.length);
    setColor(colors[random]);
    setCounter((prev) => prev + 1);
  };

  return (
    <button onClick={swap} style={{ backgroundColor: color }}>
      {counter} Likes
    </button>
  );
}
