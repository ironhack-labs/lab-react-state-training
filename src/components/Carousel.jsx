import { useState } from "react";

const Carousel = ({ images }) => {
  const [image, setImage] = useState(0);

  const goToPrevious = () => {
    setImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div>
      <button onClick={goToPrevious}>Previous</button>
      <img src={images[image]} alt="carousel" style={{ width: "300px" }} />
      <button onClick={goToNext}>Next</button>
    </div>
  );
};

export default Carousel;
