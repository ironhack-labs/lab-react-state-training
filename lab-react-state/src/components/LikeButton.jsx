import { useState } from "react";

function LikeButton() {
  const [likeCount, setCount] = useState(0);

  const likeHandler = () => {
    setCount(likeCount + 1);
  };

  return <button onClick={likeHandler}>Like: {likeCount}</button>;
}

export default LikeButton;
