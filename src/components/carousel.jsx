
import { useState } from "react";

function Carousel ({ images }) {

    const [index, setIndex] = useState(0);
    console.log(images[index])
    
    return (
        <div>
            <button onClick={() => index < 0 && `disable` || setIndex(index - 1) }>Left</button>
            <img src={images[index]} />
            <button onClick={() => index === images.length && `disable` || setIndex(index + 1) }>Right</button>
        </div>
    );
}

export default Carousel;