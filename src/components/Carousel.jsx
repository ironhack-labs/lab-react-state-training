import { useState } from "react";

function Carousel( {images} ) {
  const [counter, setCounter] = useState(0); // Initialize state
 // const [imageArray , setImageArray ] =useState({images.map()}) ;
  
  const handleRight = () => {
    setCounter((counter - 1 + images.length) % images.length); // Cycle to the next index

  };

  const handleLeft = () => {
    setCounter((counter + 1) % images.length); // Cycle to the next index
  };

  return (
    <div>
    <button className="button" onClick={handleLeft} > Left
    </button>

  
    <img  src={images[counter]} />

    <button className="button" onClick={handleRight}> Right
    </button>
    </div>
  );
}

export default Carousel;