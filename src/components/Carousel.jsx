import { useState } from "react";


function Carousel(){
    
    const images = [
        "https://randomuser.me/api/portraits/women/1.jpg",
        "https://randomuser.me/api/portraits/men/1.jpg",
        "https://randomuser.me/api/portraits/women/2.jpg",
        "https://randomuser.me/api/portraits/men/2.jpg"
    ];

    const [currentImage, setCurrentImage] = useState(0);
    
    const chooseImage = (next) => {
        if ((currentImage < 1 && next < 0) 
           || (currentImage > images.length-2 && next > 0)){
            return;
        }
        setCurrentImage((previousImage) => previousImage + next);
    };

    return (
      <div>
        <button onClick={() => chooseImage(-1)}>Left</button>
        <img src={images[currentImage]} />
        <button onClick={() => chooseImage(1)}>Right</button>
      </div>
    );
}

export default Carousel;