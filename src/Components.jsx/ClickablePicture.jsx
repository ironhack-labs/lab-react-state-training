import { useState } from "react";

function ClickablePicture() {
    const [isDice, setIsDice] = useState(false);

    const normalImage = '/src/assets/images/dice1.png';
    const glassesImage = '/src/assets/images/glasses.png';

    const toggleImage = () => {
        setIsDice(!isDice);
    };

    return (
        <div>
            <img src={isDice ? glassesImage : normalImage} alt="Person"
                onClick={toggleImage}
                style={{cursor: 'pointer', width: '200px', height: '200px'}} />
        </div>
    );



}

export default ClickablePicture;