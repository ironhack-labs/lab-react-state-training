import { useState } from "react";

export default function LikeButton() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return <button onClick={increment}>{count} Likes</button>;
}
