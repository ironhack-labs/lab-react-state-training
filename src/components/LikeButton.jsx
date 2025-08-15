import { useState } from "react";

export default function LikeButton() {
  const [like, setLike] = useState(0);

  function handleAdd() {
    setLike((like) => like + 1);
  }
  return <button onClick={handleAdd}> {like} likes</button>;
}
