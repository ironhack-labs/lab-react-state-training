import { useState } from "react";
import image0 from "../assets/images/dice-empty.png";
import image1 from "../assets/images/dice1.png";
import image2 from "../assets/images/dice2.png";
import image3 from "../assets/images/dice3.png";
import image4 from "../assets/images/dice4.png";
import image5 from "../assets/images/dice5.png";
import image6 from "../assets/images/dice6.png";

export default function Dice() {
  const [image, setImage] = useState(image3);
  const images = [image1, image2, image3, image4, image5, image6];
  const randomIndex = Math.round(Math.random() * images.length - 1);

  const onClickHandler = () => {
    setImage(image0);
    setTimeout(() => {
      setImage(images[randomIndex]);
    }, 1000);
  };

  return <img onClick={onClickHandler} src={image} />;
}
