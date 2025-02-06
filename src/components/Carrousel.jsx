import {useState} from 'react';

export default function Carrousel({images}) {
    const [currentImage, setCurrentImage] = useState(0);

    const moveLeft = () => {
      setCurrentImage(currentImage => (currentImage === 0 ? images.length - 1 : currentImage - 1));
    }

    const moveRight = () => {
      setCurrentImage(currentImage => (currentImage === images.length - 1 ? 0 : currentImage + 1));
    }

    return (
      <>
       <button onClick={moveLeft}>Left</button>
       <img src={images[currentImage]} alt="Carrousel of images"/>
       <button onClick={moveRight}>Right</button>
      </>
    );
}