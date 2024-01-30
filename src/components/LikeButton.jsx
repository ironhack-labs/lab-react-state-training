import { useState } from "react";
function LikeButton() {
  const [count, setCount] = useState(0);
  const handleButtonClick = () => {
    setCount(count + 1);
  };
  return (
    <div className="LikeButton">
      <button onClick={handleButtonClick}> {count}Like</button>
    </div>
  );
}
export default LikeButton;
