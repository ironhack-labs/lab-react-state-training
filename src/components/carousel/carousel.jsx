import React, { useState } from 'react';

function Carousel({ images }) {
  // State to keep track of the current image index
  const [currentIndex, setCurrentIndex] = useState(0); // useState hook to store the index of the current image being displayed. The initial index is 0, meaning the first image in the images array will be shown by default.

  // Function to handle going to the next image (Right button)
  const goToNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length); // Loop back to the first image
  };

  // Function to handle going to the previous image (Left button)
  const goToPrevious = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length); // Loop back to the last image
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={carouselContainerStyle}>
        <button onClick={goToPrevious} style={buttonStyle}>
          Left
        </button>
        
        {/* Image goes here */}
        <img
          src={images[currentIndex]}
          alt="carousel"
          style={imageStyle}
        />
        
        <button onClick={goToNext} style={buttonStyle}>
          Right
        </button>
      </div>
    </div>
  );
}

// Inline styles
const carouselContainerStyle = {
  display: 'flex', // align the items (buttons and image) in a horizontal row.
  justifyContent: 'center', // centers the items horizontally.
  alignItems: 'center', // ensures the buttons and image are vertically aligned.
  gap: '20px',  // Space between the buttons and the image
};

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
  margin: '10px',
};

const imageStyle = {
  width: '300px',  // Fixed width for the image
  height: 'auto',  // Maintain aspect ratio
};

export default Carousel;
