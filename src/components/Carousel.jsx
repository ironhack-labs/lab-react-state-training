import { useState } from "react";

export default function Carousel({ images }) {
  const [index, setIndex] = useState(() => 0);

  const incrBtn = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const decrBtn = () => {
    if (index !== 0) {
      setIndex((prevIndex) => (prevIndex - 1) % images.length);
    } else {
      setIndex(0);
    }
  };
  return (
    <div>
      <img src={images[index]} />
      <div>
        <button onClick={decrBtn}>Left</button>
        <button onClick={incrBtn}>Right</button>
      </div>
    </div>
  );
}
