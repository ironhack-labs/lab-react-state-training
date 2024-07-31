import React, { useState } from "react";

export default function DiscoButton() {
  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];
  const [count, setCount] = useState(0);
  return (
    <div>
      <button
        onClick={(event) => {
          setCount(count + 1);
          event.target.style.backgroundColor = colors[count];
        }}
      >
        {count} Likes
      </button>
    </div>
  );
}
