import { useState, useEffect } from "react";
import img0 from "../assets/images/dice-empty.png";
import img1 from "../assets/images/dice1.png";
import img2 from "../assets/images/dice2.png";
import img3 from "../assets/images/dice3.png";
import img4 from "../assets/images/dice4.png";
import img5 from "../assets/images/dice5.png";
import img6 from "../assets/images/dice6.png";

function shuffle(array) {
  const shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

function Dice() {
  const images = [img0, img1, img2, img3, img4, img5, img6];
  const shuffledImages = shuffle(images.slice(1));
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % shuffledImages.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [index, shuffledImages.length]);

  return (
    <div>
      <img
        src={index === 0 ? img0 : shuffledImages[index - 1]}
        alt={`Dice ${index}`}
      />
    </div>
  );
}

export default Dice;
