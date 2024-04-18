import { useState } from "react";

const colors = ["purple", "blue", "green", "yellow", "orange", "red"];
const getColor = (likes) => colors[likes % colors.length];

const DiscoButton = () => {
  const [likes, setLikes] = useState(0);

  return (
    <button
      onClick={() => setLikes(likes + 1)}
      style={{ backgroundColor: getColor(likes) }}
    >
      {likes} Likes
    </button>
  );
};

export default DiscoButton;
