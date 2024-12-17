import { useState } from "react";

function Carousel() {
  const images = [
    "https://randomuser.me/api/portraits/women/1.jpg",
    "https://randomuser.me/api/portraits/men/1.jpg",
    "https://randomuser.me/api/portraits/women/2.jpg",
    "https://randomuser.me/api/portraits/men/2.jpg",
  ];
  const [counter, setCounter] = useState(10000);
  const incrementValue = () => setCounter(counter + 1);
  const decrementValue = () => setCounter(counter - 1);

  return (
    <div className="carousel">
      <button onClick={decrementValue}>Left</button>
      <img src={images[counter % images.length]} alt="Portrait" />
      <button onClick={incrementValue}>Right</button>
    </div>
  );
}

export default Carousel;
