import { useState } from "react";

function Dice() {
    const getRandomNumber = () => {
        return Math.floor(Math.random() * 6) + 1;
      };
    const [currentImage, setCurrentImage] = useState(getRandomNumber());
    const toggleImage = () => {
        setCurrentImage(getRandomNumber());
      };

    return (
        <div style={{ display: "flex", border: "2px solid black" }}>
        <div>
            <img src={`src/assets/images/dice${currentImage}.png`} onClick={toggleImage}  width={200} height={200}/>
        </div>
        </div>
    );
}

export default Dice