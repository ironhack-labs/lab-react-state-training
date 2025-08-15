import { useState } from "react";

const colorsArr = ["purple", "blue", "green", "yellow", "orange", "red"];
// const random = Math.floor(Math.random() * colorsArr.length);

export default function DiscoButton() {
  const [like, setLike] = useState(0);
  const [color, setColor] = useState(0);

  function handleChange() {
    setLike((like) => like + 1);
    if (color < 5) {
      setColor((color) => color + 1);
    } else {
      setColor(0);
    }
  }
  return (
    <div>
      <button
        style={{ background: colorsArr[color], border: "none", color: "#fff" }}
        onClick={handleChange}
      >
        {like} likes
      </button>
    </div>
  );
}
