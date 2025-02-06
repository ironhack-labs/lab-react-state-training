import { useState } from "react";
let index = 0;
export default function DiscoButton() {
  const [likes, setLikes] = useState(0);
  const [color, setColor] = useState();
  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

  const goLike = () => {
    setLikes(likes + 1);
    setColor(colors[index]);
    index++;
    if (index >= colors.length) index = 0;
  };

  return (
    <button style={{ backgroundColor: color }} onClick={goLike}>
      {likes} likes
    </button>
  );
}
