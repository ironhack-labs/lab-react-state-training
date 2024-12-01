import { useState } from "react";

function DiscoButton({ className = "" }) {
  const [count, setCount] = useState(0);
  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

  const handleClick = () => {
    setCount(count + 1);
  };

  const currentColor = colors[count % colors.length];

  return (
    <button
      className={`btn btn-secondary btn-sm ${className}`}
      onClick={handleClick}
      style={{ backgroundColor: currentColor, color: "white" }}
    >
      {count} Likes
    </button>
  );
}

export default DiscoButton;
