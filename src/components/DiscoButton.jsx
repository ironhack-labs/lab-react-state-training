import { useState } from "react";

const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

function DiscoButton() {
    const [likes, setLikes] = useState(0);

    const handleClick = () => {
  setLikes(likes + 1);
};

const backgroundColor = colors[likes % colors.length];

  return (
    <button
  style={{ backgroundColor }}
  onClick={handleClick}
>
  {likes} Likes
</button>
  );
}

export default DiscoButton;