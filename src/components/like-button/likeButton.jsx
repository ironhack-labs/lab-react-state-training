import { useState } from "react";
function LikeButton({
  className = "",
  initialCountValue = 0,
  max,
  onClick,
  style,
}) {
  const [count, setCount] = useState(initialCountValue);

  const handleCountUp = () => {
    if (max === undefined || count < max) {
      setCount(count + 1);
    }

    if (count == max) {
      setCount(0);
    }
    if (onClick) {
      onClick();
    }
  };
  return (
    <button
      className={`btn btn-secondary btn-sm mb-2 ${className}`}
      style={style}
      onClick={handleCountUp}
    >
      {count} Likes
    </button>
  );
}
export default LikeButton;
//   let intialValue = initialCountValue;
//   if (min !== undefined) {
//     intialValue = Math.max(min, intialValue);
//   }
//   if (max !== undefined) {
//     intialValue = Math.min(max, intialValue);
//   }
