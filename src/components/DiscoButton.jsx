import { useState } from "react";

function DiscoButton() {
  // Color array
  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

  // Increments
  const [counter, setCounter] = useState(0);
  const incrementValue = () => setCounter(counter + 1);

  return (
    <button style={{ backgroundColor: colors[counter % colors.length] }} onClick={incrementValue}>
      {counter} Likes
    </button>
  );
}

export default DiscoButton;
