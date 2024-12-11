import { useState } from "react";

const LikeButton = ({ initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount);


  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        border: "2px solid black",
        borderRadius: "5px",
        backgroundColor: "white",
        color: "black",
        cursor: "pointer",
        margin: "10px",
        display: "inline-block",
      }}
    >
      {count} Likes
    </button>
  );
};

export default LikeButton;