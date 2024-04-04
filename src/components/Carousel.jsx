import { useState } from "react";

function Carousel({ basePath, count }) {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    // Generate image URLs with alternating genders
    const images = [];

    // generating list .. with alternation of man / woman :D we come in pairs :P; The best way to get a binary cycle .. use %2 :P
    for (let i = 0; i < count; i++) {
      const gender = i % 2 === 0 ? 'women' : 'men';
      const number = Math.floor(i / 2) + 1;
      images.push(`${basePath}/${gender}/${number}.jpg`);
    }
  
    // Handlers for the buttons
    // if is at index 0 it goes to the last one - circles it 
    const goLeft = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };
  
    // if is at the edge, start from the beginning.
    const goRight = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    return (
      <div>
        <button type="button"  onClick={goLeft}>Left</button>
        <img src={images[currentIndex]} alt={`Carousel ${currentIndex}`} />
        <button type="button"  onClick={goRight}>Right</button>
      </div>
    );
  }
  

  export default Carousel