import { useState } from "react";
import CarouselImage from "../carouselImage/carouselImage";

function Carousel({className = '', images}) {
    const [currentIndex, setCurrentIndex] = useState(1);
    const currentImage = images[currentIndex];

    const handleNext = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };
   
    return (
        <> 
            <div className={`d-flex align-items-center gap-3 ${className}`}>                
                <button 
                    onClick={handlePrev} 
                    style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
                >
                    Left
                </button>                
                <CarouselImage src={currentImage} />                
                <button 
                    onClick={handleNext} 
                    style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
                >
                    Right
                </button>
            </div>           
        </>
    )
}
export default Carousel;