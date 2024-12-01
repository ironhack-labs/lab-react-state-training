import { useState } from "react";

function Carousel ({images}){
    const [index, setIndex] = useState(0);
    
    const increase = () => {
        setIndex ((prevIndex) => (prevIndex + 1) % images.length); 
    }

    const decrease =() => {
        setIndex ((prevIndex) => (prevIndex - 1  + images.length) % images.length); 
    }

    return (
        <div>
            <button onClick={decrease} className="btn btn-light btn-outline-dark">Left</button>
            <img src = {images[index]}/>
            <button onClick={increase} className="btn btn-light btn-outline-dark">Right </button>
        </div>
    );
}

export default Carousel; 