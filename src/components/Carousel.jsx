import { useState } from "react"



export function Carousel ({images}) {

    const [currentPosition, setCurrentPosition] = useState(0);
    const [image, setImage] = useState(images[currentPosition]);

    console.log("before click", currentPosition)

    const nextImage = () => {
        const updatePosition = currentPosition === images.length -1 ? 0 : currentPosition +1;
        setCurrentPosition(updatePosition);
        setImage(images[updatePosition])
    };

    const previousImage = () => {
      const updatePosition =
        currentPosition === 0 ? images.length-1 : currentPosition - 1;
      setCurrentPosition(updatePosition);
      setImage(images[updatePosition]);
    };

    return (
      <>
        <div>
          <button onClick={previousImage}>Left</button>
          <img src={image} alt="a person" />
          <button onClick={nextImage}>Right</button>
        </div>
      </>
    );
}