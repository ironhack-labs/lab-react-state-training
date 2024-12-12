import React, {useState } from "react";


function Dice(){
    const [number, setNumber] = useState(Math.floor(Math.random() * 5)+1);
    const [imageSrc, setImageSrc] = useState(`/dice${number}.png`); // Initial image

    const handleChangeActive = () => {
        setImageSrc("/dice-empty.png");

        // Change to a new random dice image after 1 second
        setTimeout(() => {
            const newNumber = Math.floor(Math.random() * 6) + 1; // Random number between 1-6
            setNumber(newNumber);
            setImageSrc(`/dice${newNumber}.png`);
        }, 1000);

    };

    return(
        <div>
            <img onClick={handleChangeActive} src={imageSrc}/> 
        </div>


    )
}
export default Dice;
