import React, { useState } from "react";


export default function ClickablePicture() {

    const imgGlass = '../src/assets/images/maxence.png';
    const imgNoGlass = '../src/assets/images/maxence-glasses.png';

    const [isClicked, setIsClicked] = useState(false);


    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        <div>
            <img src={isClicked ? imgNoGlass : imgGlass} alt="Toggle Glasses" onClick={handleClick} style={{ cursor: "pointer" }} />
        </div>
    );
}
