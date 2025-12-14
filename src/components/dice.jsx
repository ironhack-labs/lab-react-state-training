import React, {useState} from 'react';
import FirstImage from '../assets/images/dice3.png';
import SecondImage from '../assets/images/dice-empty.png';
import ThirdImage from '../assets/images/dice6.png';

const images = {
    1: FirstImage,
    2: SecondImage,
    3: ThirdImage,
};

function Dice() {
    const[ currentImageId, setCurrentImageId] = useState(1);
    
    const handleClick = () => {
        if (currentImageId !== 1) {
            return;
        }

        setCurrentImageId(2);

        setTimeout(() => {
            setCurrentImageId(3);
        })

        setTimeoutId = (() => {
            setCurrentImageId(1);
        }, 3000);
    }
    return (
        <div style={{display: 'inline-block'}}>
            <h2>Click on the image for starting the sequency</h2>
            <img
            src={images[currentImageId]}
                onClick={handleClick}
                alt={`Image ${currentImageId}`}
                style={{cursor: 'pointer', maxWidth: '200px', border: '2px solid black'}}
                />
        

        </div>
    );
    
}

export default Dice;

