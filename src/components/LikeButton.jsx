import { useState } from "react";

export default function LikeButton() {
  const [count, setCount] = useState(0);

  const CountHandler = () => setCount(count + 1);

  return <button onClick={() => CountHandler()}>{count} Likes</button>;
}
