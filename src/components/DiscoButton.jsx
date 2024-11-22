import { useState } from "react";

function DiscoButton() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const arrayColors = ["purple", "blue", "green", "yellow", "orange", "red"];
  
  const [colorIndex1, setColorIndex1] = useState(0);
  const [colorIndex2, setColorIndex2] = useState(0);

  const handleClick1 = () => {
    setCount1(count1 + 1); 
    setColorIndex1((colorIndex1 + 1) % arrayColors.length); 
  };

  const handleClick2 = () => {
    setCount2(count2 +1);
    setColorIndex2((colorIndex2 + 1) % arrayColors.length);
  };

  return (
    <div className="d-flex gap-3">
      <button className="p-1 rounded" style={{ backgroundColor: arrayColors[colorIndex1]}} onClick={handleClick1}>
        {" "}
        {count1} {count1 === 1 ? "Like" : "Likes"}
      </button>

      <button className="p-1 rounded" style={{ backgroundColor: arrayColors[colorIndex2]}} onClick={handleClick2}>
        {" "}
        {count2} {count2 === 1 ? "Like" : "Likes"}
      </button>
    </div>
  );
}

export default DiscoButton;






