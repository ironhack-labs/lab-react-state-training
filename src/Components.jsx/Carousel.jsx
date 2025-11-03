import { useState } from "react";


function Carousel() {
 const  images = ["https://randomuser.me/api/portraits/women/1.jpg",
    "https://randomuser.me/api/portraits/men/1.jpg",
    "https://randomuser.me/api/portraits/women/2.jpg",
    "https://randomuser.me/api/portraits/men/2.jpg"
 ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex(currentIndex === 0 ?  images.length - 1 : currentIndex -1);
    }
     
    const goToNext = () => {
        setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    }

 return(
   
   
  <div className="carousel-container">
    
    <h2>Image Carousel</h2>
    
  
    <div className="carousel">
      
    
      <div className="image-container">
        <img 
          src={images[currentIndex]} 
          alt={`Slide ${currentIndex + 1}`}
          className="carousel-image"
        />
      </div>
      
     
      <div className="carousel-controls">
        <button onClick={goToPrevious} className="carousel-button prev-button">
          ← Previous
        </button>
        
        <div className="slide-indicator">
          {currentIndex + 1} / {images.length}
        </div>
        
        <button onClick={goToNext} className="carousel-button next-button">
          Next →
        </button>
      </div>
      
    </div>
  </div>
);
}

export default Carousel