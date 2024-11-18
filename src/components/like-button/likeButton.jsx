import { useState } from "react";
function LikeButton({ className = "", initialCountValue = 0, max, }) {
  const [count, setCount] = useState(initialCountValue);

  const handleCountUp = () => {
    if (max === undefined || count < max) {
      setCount(count + 1);
    }
   
    if (count == max) {
      setCount(0);
    }
  };
  return (
    <div className="container-sm bg-primary col-md-3 {className}">
      <button className="btn btn-secondary btn-sm mb-2" onClick={handleCountUp}>
        {count} Likes
      </button>
    </div>
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
