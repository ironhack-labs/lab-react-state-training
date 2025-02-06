import { useState } from "react";

function Carousel(prop) {
const [next, useNext] = useState(false)

    return (
        <div>
            <button onClick={next}>Left</button>
            <img src={prop.images}/>
            <button onClick={next}>Right</button>
        </div>
    )
}

export default Carousel;