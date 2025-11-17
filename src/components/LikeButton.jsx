import { useState } from "react";

export default function LikeButton() {
  const [count, setCount] = useState(0);

  // Function to handle button clicks
  const handleClick = () => {
    console.log("Button clicked!");  // log each click
    setCount(count + 1);             // update the state
  };


  return (
    // <button onClick={() => setCount(count + 1)}>
    <button onClick={handleClick}>
      {count} Likes
    </button>
  );
}