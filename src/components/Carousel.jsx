import { useState } from "react";

export default function Carousel({ images }) {
  const [index, setIndex] = useState(0);
  // console.log(index);

  return (
    <div style={{ margin: "20px" }}>
      <button onClick={() => setIndex((index) => (index > 0 ? index - 1 : 0))}>
        Left
      </button>
      <span>
        <img
          src={
            images[index] || (index < 0 ? images[0] : images[images.length - 1])
          }
        />
      </span>
      <button
        onClick={() =>
          setIndex((index) =>
            index < images.length - 1 ? index + 1 : images.length - 1
          )
        }
      >
        Right
      </button>
    </div>
  );
}
