import { useState } from "react";

function Carousel (props) {

    const [count,setCount] = useState(0);

    return (
        <div>
            <h1>Carousel</h1>
            <button onClick={()=> count >0 ? setCount(count -1) : setCount(0)}>Left</button>
            <img src={props.images[count]} alt= "picture"></img>
            <button onClick={()=> count < (props.images.length -1) ? setCount(count+1) : setCount(props.images.length -1)}>Right</button>
        </div>
    )
}

export default Carousel