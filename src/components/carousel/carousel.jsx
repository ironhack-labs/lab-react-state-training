import { useState } from "react";

function Carousel({ images }) {
    const [count, setCount] = useState(0);
    const handleLeftClick = () => {
        if (count <= 0) {
            setCount(images.length - 1);
        } else {
            setCount(count -1);
        }
        
    }
    const handleRightClick = () => {
        if (count >= images.length -1) {
            setCount(0);
        } else {
            setCount(count + 1);
        }
    }
    return (
        <div className=" d-flex container mt-4">
            <button onClick={handleLeftClick} className="align-self-end" type="button">Left</button>
            <img src={images[count]} alt={images[count].slice(images[count].length - 11,images[count].length - 4)} />
            <button onClick={handleRightClick} className="align-self-end" type="button">Right</button>
        </div>
    );
}

export default Carousel;