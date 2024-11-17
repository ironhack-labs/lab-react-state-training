import { useState } from "react";

function Carousel({className = "", images}) {
  const [currentImg, setImg] = useState(0);

  const handleLeft = () => {
    setImg((currentIndex) => {
        if (currentIndex === 0) {
            return images.length - 1;
        } else {
            return currentIndex - 1;
        }
    })
  };

  const handleRight = () => {
    setImg((currentIndex) => {
      if (currentIndex === images.length - 1) {
        return 0;
      } else {
        return currentIndex + 1; 
      }
    });
  };


  return (
    <div className={className}>
      <button onClick={handleLeft}>
        Left
      </button>
      <img src={images[currentImg]} />
      <button onClick={handleRight}>
        Right
      </button>
    </div>
  );
}

export default Carousel;
