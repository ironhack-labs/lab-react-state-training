import "./Carousel.css";
import { useState } from "react";

function Carousel(props) {
  const images = props.images;
  const [count, setCount] = useState(0);
  const currentImage = images[count % images.length];
  return (
    <>
      <div className="img-wrapper">
        <img src={currentImage} alt="user image" />
      </div>
      <div className="button-wrapper">
        <button
          onClick={() => {
            setCount(count <= 0 ? count + images.length : count - 1);
          }}
        >
          ⬅️
        </button>

        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          ➡️
        </button>
      </div>
    </>
  );
}

export default Carousel;
