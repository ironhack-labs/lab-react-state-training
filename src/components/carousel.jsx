import { useState } from "react";

function Carousel({ images }) {

  const [position, setPosition] = useState(0);
  let src = images[position];
  const updateImage = (direction) => {
    if (direction === "Left") {
      if (position === 0) {
        setPosition(0);
        src = images[position];
      } else {
        setPosition(position - 1);
        src = images[position];
      }
    } 
    
    if (direction === "Right") {
      if (position === images.length -1){
        setPosition(images.length -1);
        src = images[position];
      } else {
        setPosition(position + 1);
        src = images[position];
      }
    }
  }

  return (
    <div className="Carousel">
      <button className="btn border" type="button" onClick={()=> updateImage("Left")}>Left</button>
      <img src={src} alt="random user" />
      <button className="btn border" type="button" onClick={()=> updateImage("Right")}>Right</button>
    </div>
  );
}

export default Carousel;