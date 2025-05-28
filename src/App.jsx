import React, { useState, useEffect } from 'react';
import './App.css';

// Iteration 1: LikeButton Component
const LikeButton = () => {
  const [likes, setLikes] = useState(0);

  const handleClick = () => {
    setLikes(likes + 1);
  };

  return (
    <button 
      onClick={handleClick}
      className="like-button"
    >
      {likes} Likes
    </button>
  );
};

// Iteration 2: Counter Component
const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(Math.max(0, count - 1)); // Ensure count never goes below 0
  };

  return (
    <div className="counter-container">
      <button 
        onClick={decrement}
        className="counter-button decrement"
      >
        -
      </button>
      <span className="counter-display">{count}</span>
      <button 
        onClick={increment}
        className="counter-button increment"
      >
        +
      </button>
    </div>
  );
};

// Iteration 3: ClickablePicture Component
const ClickablePicture = () => {
  const [isClicked, setIsClicked] = useState(false);

  const togglePicture = () => {
    setIsClicked(!isClicked);
  };

  // Using the actual images from the assets folder
  const image1 = "./src/assets/images/maxence.png";
  const image2 = "./src/assets/images/maxence-glasses.png";

  return (
    <div className="clickable-picture-container">
      <img
        src={isClicked ? image2 : image1}
        alt="Maxence"
        onClick={togglePicture}
        className="clickable-picture"
        width="200"
        height="200"
      />
    </div>
  );
};

// Iteration 4: Dice Component
const Dice = () => {
  const [diceImage, setDiceImage] = useState("./src/assets/images/dice3.png");
  const [isRolling, setIsRolling] = useState(false);

  const rollDice = () => {
    if (isRolling) return; // Prevent multiple clicks during rolling

    setIsRolling(true);
    
    // Show empty dice immediately
    setDiceImage("./src/assets/images/dice-empty.png");

    // After 1 second, show random dice value
    setTimeout(() => {
      const randomValue = Math.floor(Math.random() * 6) + 1;
      setDiceImage(`./src/assets/images/dice${randomValue}.png`);
      setIsRolling(false);
    }, 1000);
  };

  return (
    <div className="dice-container">
      <img
        src={diceImage}
        alt="Dice"
        onClick={rollDice}
        className="dice-image"
      />
      {isRolling && <p className="dice-status">Rolling...</p>}
    </div>
  );
};

// Bonus Iteration 5: DiscoButton Component
const DiscoButton = () => {
  const [likes, setLikes] = useState(0);
  const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

  const handleClick = () => {
    setLikes(likes + 1);
  };

  const currentColor = colors[likes % colors.length];

  return (
    <button 
      onClick={handleClick}
      className="disco-button"
      style={{ backgroundColor: currentColor }}
    >
      {likes} Likes
    </button>
  );
};

// Bonus Iteration 6: Carousel Component
const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goLeft = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goRight = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (!images || images.length === 0) {
    return <div>No images provided</div>;
  }

  return (
    <div className="carousel-container">
      <button 
        onClick={goLeft}
        className="carousel-button"
      >
        Left
      </button>
      <img
        src={images[currentIndex]}
        alt={`Carousel ${currentIndex + 1}`}
        className="carousel-image"
      />
      <button 
        onClick={goRight}
        className="carousel-button"
      >
        Right
      </button>
    </div>
  );
};

// Main App Component demonstrating all components
const App = () => {
  const carouselImages = [
    "https://randomuser.me/api/portraits/women/1.jpg",
    "https://randomuser.me/api/portraits/men/1.jpg",
    "https://randomuser.me/api/portraits/women/2.jpg",
    "https://randomuser.me/api/portraits/men/2.jpg"
  ];

  return (
    <div className="app">
      <h1 className="app-title">
        React State and Events Exercise
      </h1>
      
      <div className="container">
        <section className="section">
          <h2 className="section-title">Iteration 1: LikeButton</h2>
          <LikeButton />
        </section>

        <section className="section">
          <h2 className="section-title">Iteration 2: Counter</h2>
          <Counter />
        </section>

        <section className="section">
          <h2 className="section-title">Iteration 3: ClickablePicture</h2>
          <p className="section-description">Click the image to toggle between two pictures</p>
          <ClickablePicture />
        </section>

        <section className="section">
          <h2 className="section-title">Iteration 4: Dice</h2>
          <p className="section-description">Click the dice to roll it (1 second delay)</p>
          <Dice />
        </section>

        <section className="section">
          <h2 className="section-title">Bonus Iteration 5: DiscoButton</h2>
          <DiscoButton />
        </section>

        <section className="section">
          <h2 className="section-title">Bonus Iteration 6: Carousel</h2>
          <Carousel images={carouselImages} />
        </section>
      </div>
    </div>
  );
};

export default App;