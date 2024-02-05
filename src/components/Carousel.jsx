import { useState } from "react";

export default function Carousel({ images }) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const previousImg = () => {
    setCurrentImgIndex((prevIndex) =>
      // Are we at the beginning of the array? If so, go to the end of the index. If not, go to the previous index.
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImgIndex((prevIndex) =>
        // Are we at the end of the array? If so, go to index 0. If not, go to the next index.
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <button className="left" onClick={previousImg}>
        Left
      </button>
      <img src={images[currentImgIndex]} />
      <button className="right" onClick={nextImage}>
        Right
      </button>
    </div>
  );
}
