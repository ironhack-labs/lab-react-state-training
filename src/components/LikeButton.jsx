import { useState } from "react";

function LikeButton() {
  const [like, setLike] = useState(0);

  return <button onClick={() => setLike(like + 1)}> {like} Likes </button>;
}

export default LikeButton;
