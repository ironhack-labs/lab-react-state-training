import { useState } from "react";
import "./carousel.css"

function Carousel(props){

    let one = props.images[0];
    let two = props.images[1];
    let three = props.images[2];
    let four = props.images[3];
    let picArr = [one, two, three, four]

    const [pic, setPic] = useState(0);

    return (
        <div className="carousel-container">
            <button className="btn" onClick={()=>pic>0 ? setPic(pic-1) : setPic(picArr.length - 1)}>
            Left
            </button>
            <img src={picArr[pic]}/>
            <button className="btn" onClick={()=>pic<picArr.length -1 ? setPic(pic + 1) : setPic(0)}>
            Right  
            </button>
        </div>
    )
}

export default Carousel;