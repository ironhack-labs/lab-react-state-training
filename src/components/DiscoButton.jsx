import React, { useState } from "react";
import styles from "./DiscoButton.css";

export default function DiscoButton() {
  const [count, setCount] = useState(0);
  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];
  
  const randomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const [color, setColor] = useState(randomColor);

  const increment = () => {
    setCount(count + 1);
    setColor(randomColor());
  };

  return (
    <button onClick={increment} style={{ backgroundColor: color }}>
      {count} Likes
    </button>
  );
}
