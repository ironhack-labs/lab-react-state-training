import { useState } from "react";

export function Carousel({ images }) {
  const [position, setImage] = useState(0);

  const imageLeft = () => {
    console.log(position);
    setImage((previous) => (previous === 0 ? images.length - 1 : previous - 1));
  };
  const imageRight = () => {
    console.log(position);
    setImage((previous) => previous + 1);
  };
  return (
    <>
      <button onClick={imageLeft}> Left </button>
      <img src={images[position % images.length]} />
      <button onClick={imageRight}> Right </button>
    </>
  );
}
