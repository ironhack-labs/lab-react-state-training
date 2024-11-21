import { useState } from "react";

function Carousel({ images }) {
  const [index, setIndex] = useState(0);
  return (
    <>
      <button onClick={() => setIndex(index - 1 + images.length) % images.length}>Left</button>
      <img src={images[index % images.length]} />
      <button onClick={() => setIndex(index + 1) % images.length}>Right</button>
    </>
  );
}
export default Carousel;