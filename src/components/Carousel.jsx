import { useState } from "react";

export function Carousel() {
  
  const images = [
    "https://randomuser.me/api/portraits/women/1.jpg",
    "https://randomuser.me/api/portraits/men/1.jpg",
    "https://randomuser.me/api/portraits/women/2.jpg",
    "https://randomuser.me/api/portraits/men/2.jpg"
  ];
  
  const [imgIndex, setImgIndex] = useState(0);

  
  const handleNext = () => {
  setImgIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
  setImgIndex((prev) => (prev - 1 + images.length) % images.length);
  };

    
    
  return (
    <div className='carousel'>
      <button onClick={handlePrev}>Left</button>
      <img src={images[imgIndex]} alt="images" className="carousel-img" />
      <button onClick={handleNext}>Right</button>
    </div>
  );

}
