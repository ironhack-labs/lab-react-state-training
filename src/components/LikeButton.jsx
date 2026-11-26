import { useState } from "react";

function LikeButton({ colours = [] }) {
  const [count, setCount] = useState(0);

  const handleLike = () => {
    setCount(count + 1);
  };

  const styles = {
    backgroundColor: colours.length > 0
      ? colours[count % colours.length]
      : undefined
  };

  return (
    <button onClick={handleLike} style={styles}>
      {count} Likes
    </button>
  );
}

export default LikeButton;