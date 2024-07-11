import { useState } from "react";
const Carousel = () => {
  const [index, setIndex] = useState(0);
  const images = [
    "https://randomuser.me/api/portraits/women/1.jpg",
    "https://randomuser.me/api/portraits/men/1.jpg",
    "https://randomuser.me/api/portraits/women/2.jpg",
    "https://randomuser.me/api/portraits/men/2.jpg",
  ];
  const handleClick = (direction) => {
    if (direction === "left") {
      setIndex((index - 1) % images.length);
    } else {
      setIndex((index + 1) % images.length);
    }
  };
  return (
    <div className="carousel">
      <button onClick={() => handleClick("left")}>Left</button>
      <img src={images[index]} />
      <button onClick={() => handleClick("right")}>Right</button>
    </div>
  );
};
export default Carousel;