import { useState } from "react";

const DiscoButton = () => {
  const [counter, setCounter] = useState(0);
  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

  return (
    <button
      style={{
        backgroundColor: colors[counter % colors.length],
        color: "white",
      }}
      onClick={() => {
        setCounter(counter + 1);
      }}
    >
      {counter} Likes
    </button>
  );
};

export default DiscoButton;
