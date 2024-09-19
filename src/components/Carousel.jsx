import { useState } from "react";

function Carousel(props){

    const [index, setIndex] = useState(0);

    const handleImages = (event) => {
        console.log(index);
        if(event.target.innerText === "Left") setIndex((index -1) & props.images.length-1);
        else setIndex((index + 1) & props.images.length-1);
    };

    return(
        <div id="carousel" className="row">
            <button onClick={handleImages}>Left</button>
            <img src={props.images[index]} alt="picture" />
            <button onClick={handleImages}>Right</button>
        </div>
    );
}

export default Carousel;