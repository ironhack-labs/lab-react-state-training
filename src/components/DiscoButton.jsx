import { useState } from "react";

export function DiscoButton() {
const colors = [
  "#FFB6C1", // LightPink
  "#87CEEB", // SkyBlue
  "#32CD32", // LimeGreen
  "#FFD700", // Gold
  "#FF69B4", // HotPink
  "#BA55D3", // MediumOrchid
  "#FFA07A", // LightSalmon
  "#20B2AA", // LightSeaGreen
  "#ADD8E6", // LightBlue
  "#90EE90"  // LightGreen
];

  const [count, setCount] = useState(0);
  const [bgColor, setBgColor] = useState("white");

  const handleIncrement = () => {
    setCount(count + 1);
    const randomColor = Math.floor(Math.random() * colors.length);
    setBgColor(colors[randomColor]);
  };

  return (
      <button 
        onClick={handleIncrement} 
        style={{ backgroundColor: bgColor }}
        className="like-button disco-button"
      >
        {count} Likes
      </button>
    );


}
