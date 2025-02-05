import { useState } from "react";
import image0 from "../assets/images/dice-empty.png";
import image1 from "../assets/images/dice1.png";
import image2 from "../assets/images/dice2.png";
import image3 from "../assets/images/dice3.png";
import image4 from "../assets/images/dice4.png";
import image5 from "../assets/images/dice5.png";
import image6 from "../assets/images/dice6.png";

export default function Dice() {

    const arrayDirection = [image1, image2, image3, image4, image5, image6];
    const [currentImage, setCurrentImage] = useState(arrayDirection[Math.floor(Math.random() * arrayDirection.length)]);

    const handleClick = () => {
        setCurrentImage(image0);
         setTimeout(() => {
            const randomImage = arrayDirection[Math.floor(Math.random() * arrayDirection.length)];
            setCurrentImage(randomImage);
        }, 1000);
    };
    return (
        <img src={currentImage} onClick={handleClick} 
             
        />
    );
}