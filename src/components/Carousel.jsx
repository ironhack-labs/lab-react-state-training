import { useState } from "react";

const Carousel = ({ images }) =>{
    const [index,setIndex] = useState(0);

    const handleNext =()=>{
        setIndex((nextIndex) => nextIndex +1 )
    }

    const handlePrevious = () =>{
        setIndex((nextIndex) => nextIndex -1)

    }

    return (
        <div>
            <button onClick={handlePrevious}> Previous Image </button>
            <img src={images[index]} alt="Something went wrong" />
            <button onClick={handleNext}> Next  Image</button>
        </div>
    )
}

export default Carousel