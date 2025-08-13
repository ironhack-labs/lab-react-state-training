import { useState } from "react";

function LikeButton({ color, onClickHandle }) {
  const [likes, setLikes] = useState(0);

  const handleAddLikes = () => setLikes(likes + 1);
  return (
    <div>
      <button onClick={() => {
        handleAddLikes();
        onClickHandle && onClickHandle();
       }} style={color && { backgroundColor: color, color: "white"}}>{likes} Likes</button>
    </div>
  );
}
export default LikeButton;
