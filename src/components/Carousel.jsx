import React, { useState } from 'react'

function Carousel({ images }) {
    // Keep track of which image we're showing
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    // Go to next image
    const showNextImage = () => {
        if (currentImageIndex === images.length - 1) {
            setCurrentImageIndex(0)  // Go back to first image
        } else {
            setCurrentImageIndex(currentImageIndex + 1)
        }
    }

    // Go to previous image
    const showPreviousImage = () => {
        if (currentImageIndex === 0) {
            setCurrentImageIndex(images.length - 1)  // Go to last image
        } else {
            setCurrentImageIndex(currentImageIndex - 1)
        }
    }

    return (
        <div className="carousel">
            <button onClick={showPreviousImage}>Left</button>
            <img 
                src={images[currentImageIndex]} 
                alt={`Image ${currentImageIndex + 1}`}
                style={{ width: '200px', height: '200px' }}
            />
            <button onClick={showNextImage}>Right</button>
        </div>
    )
}

export default Carousel
