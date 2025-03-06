import { useState } from "react";

export default function DiscoButton() {
  const bg = ["purple", "blue", "green", "yellow", "orange", "red"];
  const [like, setLike] = useState(() => 0);
  const incrBtn = () => {
    setLike((prevLike) => prevLike + 1);
  };
  return (
    <div>
      <button
        onClick={incrBtn}
        style={{
          background: bg[like % bg.length],
          color: "white",
          fontSize: "20px",
          margin: "3px",
        }}
      >
        {like} like
      </button>
    </div>
  );
}
