// ### Bonus: Iteration 6 | `Carousel`

// Create a `Carousel` component that displays an image and two buttons (<kbd>Left</kbd> and <kbd>Right</kbd>), which change the picture on each click, respectively.

// The component should take 1 prop:

// - `images`: An array of strings. Each string should be an image URL.

// **Example:**

// ```jsx
// <Carousels
// CarouselComponent.js

const images = [
  { src: "https://randomuser.me/api/portraits/women/1.jpg" },
  { src: "https://randomuser.me/api/portraits/men/1.jpg" },
  { src: "https://randomuser.me/api/portraits/women/2.jpg" },
  { src: "https://randomuser.me/api/portraits/men/2.jpg" },
];

// Carousel.js
import React, { useState } from "react";
import "../css/Carousel.css";
const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeftClick = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleRightClick = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div className="carousel">
      <img src={images[currentIndex].src} alt="Carousel image" />
      <div>
        <button onClick={handleLeftClick}>
          <kbd>Left</kbd>
        </button>
        <button onClick={handleRightClick}>
          <kbd>Right</kbd>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
