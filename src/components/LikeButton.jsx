import { useState } from "react";

export default function LikeButton({ bgColor }) {
  const [like, setLike] = useState(() => 0);
  const incrBtn = () => {
    setLike((prevLike) => prevLike + 1);
  };
  return (
    <div>
      <button onClick={incrBtn} id="btn">
        {like} like
      </button>
    </div>
  );
}
