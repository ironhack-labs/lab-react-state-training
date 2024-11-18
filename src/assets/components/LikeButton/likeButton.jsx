import { useState } from "react";

function LikeButton({ className = "" }) {
  const [count, setCount] = useState(0);

  const handelCountUp = () => {
    setCount(count + 1);
  };

  return (
    <div className="d-flex gap-2">
      <button className={`rounded ${className}`} onClick={handelCountUp}>
        {count} Like
      </button>
    </div>
  );
}
export default LikeButton;
