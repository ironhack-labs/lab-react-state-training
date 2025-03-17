import React, { useState } from "react";

export const DiscoButton = ({ randomNumber }) => {
  const bgColorChoice = ["purple", "blue", "green", "yellow", "orange", "red"];
  const [bgColor, setBgColor] = useState(bgColorChoice[randomNumber() - 1]);
  const [count, setCount] = useState(0);

  return (
    <>
      <button
        style={{backgroundColor: bgColor}}
        onClick={() => {
          setCount(count + 1);
          setBgColor(bgColorChoice[randomNumber() - 1]);
        }}
      >
        {count} Likes
      </button>
    </>
  );
};
