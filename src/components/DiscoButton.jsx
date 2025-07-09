import React, { useState } from "react";

function DiscoButton() {
  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];
  const [likes, setLikes] = useState(0);

  const handleClick = () => {
    setLikes(likes + 1);
  };

  const bgColor = colors[likes % colors.length];

  return (
    <button
      onClick={handleClick}
      style={{
        backgroundColor: bgColor,
        color: "white",
        padding: "10px",
        border: "none",
        borderRadius: "5px",
        marginTop: "10px"
      }}
    >
      {likes} Likes
    </button>
  );
}

export default DiscoButton;