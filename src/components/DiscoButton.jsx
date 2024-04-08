import { useState } from "react";

const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

function DiscoButton() {
  const [count, setCount] = useState(0);
  return (
    <button
      style={{
        background: colors[count % colors.length],
        color: "white",
        fontSize: "20px",
        margin: "3px",
      }}
      onClick={() => setCount(count + 1)}
    >
      {count} Likes
    </button>
  );
}

export default DiscoButton;