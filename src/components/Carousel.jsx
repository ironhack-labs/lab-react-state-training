import React from "react";
import { useState } from "react";

function Carousel(props) {
  const { images } = props;

  // Error handling: Check if images array is passed and not empty
  if (!images || images.length === 0) {
    return <p>No images available</p>;
  }
  //   const { randomUser1, randomUser2, randomUser3, randomeUser4 } = props;
  //   const users = [randomUser1, randomUser2, randomUser3, randomeUser4];

  //   const [currentUser, setCurrentUser] = useState(users[0]);
  //   const handleRandomUser = () => {
  //     const randomIndex = Math.floor(Math.random() * users.length);
  //     setCurrentUser(users[randomIndex]);
  //   };

  //   return (
  //     <div>
  //       <button onClick={handleRandomUser}>Left</button>
  //       <img src={currentUser} alt="current user" className="base-image" />
  //       <button onClick={handleRandomUser}>Right</button>
  //     </div>
  //   );
  // }

  const [currentIndex, setCurrentIndex] = useState(0);

  const getRandomIndex = () => {
    let randomIndex = currentIndex;
    while (randomIndex === currentIndex) {
      randomIndex = Math.floor(Math.random() * images.length);
    }
    return randomIndex;
  };

  const handleLeftClick = () => {
    setCurrentIndex(getRandomIndex());
  };

  const handleRightClick = () => {
    setCurrentIndex(getRandomIndex());
  };

  // const handleLeftClick = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  // };

  // const handleRightClick = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  // };

  return (
    <div className="carouss">
      <button className="item1" onClick={handleLeftClick}>
        Left
      </button>
      <img
        className="item2"
        src={images[currentIndex]}
        alt={`Carousel ${currentIndex + 1}`}
      />
      <button className="item3" onClick={handleRightClick}>
        Right
      </button>
    </div>
  );
}

export default Carousel;
