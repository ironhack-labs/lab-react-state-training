import React, { useState } from "react";
import img1 from "../assets/images/dice1.png";
import img2 from "../assets/images/dice2.png";
import img3 from "../assets/images/dice3.png";
import img4 from "../assets/images/dice4.png";
import img5 from "../assets/images/dice5.png";
import img6 from "../assets/images/dice6.png";
import imgEmpty from "../assets/images/dice-empty.png";

function Dice() {
  // creamos un array de imágenes y un index random
  const imgArr = [img1, img2, img3, img4, img5, img6];
  let randomIndex = Math.floor(Math.random() * imgArr.length);

  // state
  const [randomImg, setRandomImg] = useState(imgArr[randomIndex]);

  // event
  const handleRandomImg = () => {
    setRandomImg(imgEmpty);
    //setTimeOut
    setTimeout(() => {
        setRandomImg(imgArr[randomIndex])
    }, 1000);
  };

  return (
    <div>
      <img src={randomImg} alt="text" width="80px" onClick={handleRandomImg} />
    </div>
  );
}

export default Dice;
