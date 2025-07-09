import react, { useState } from "react";

function DiscoButton() {
  const colorArr = ["purple", "blue", "green", "yellow", "orange", "red"];

  const [counter, setCounter] = useState(0);
  const [colorToDisplay, setColor] = useState("blue");

  const clickAction = () => {
    const newValue = counter + 1;
    setCounter(newValue);

    const randomIndex = Math.floor(Math.random() * colorArr.length);
    setColor(colorArr[randomIndex]);
  };

  return <button onClick={clickAction} style={{backgroundColor:colorToDisplay}}>{counter} likes</button>;
}

export default DiscoButton;
