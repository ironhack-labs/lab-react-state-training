import { useState, useEffect } from "react";
import "./DiscoButton.css";

function DiscoButton() {
  const [count, setCount] = useState(0);
  const colorArr = ["purple", "blue", "green", "yellow", "orange", "red"];

  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    changeColor();
  }, [count]);

  function changeColor() {
    setColorIndex(Math.floor(Math.random() * colorArr.length));
  }

  function increment() {
    setCount(count + 1);
  }

  return (
    <button className={"disco " + colorArr[colorIndex]} onClick={increment}>
      {" "}
      {count} Likes
    </button>
  );
}

export default DiscoButton;
