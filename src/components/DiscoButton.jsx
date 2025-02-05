
import { useState } from "react";

const discoColors = ["purple", "blue", "green", "yellow", "orange", "red"];

function DiscoButton() {
  const [count, setCount] = useState(0);


  return (
    <div className="disco-like-button">
      <button onClick={() => setCount(count + 1)} style={{ backgroundColor: discoColors[count % discoColors.length] }}> {count} Likes</button>
    </div>
  );
}

export default DiscoButton;
