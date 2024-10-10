import { useState } from "react";

function Carousel(props) {
    const [currentPic, setCurrentPic] = useState(props.images[0])
    const handleRightClick = () => {
        let currentPicIndex = props.images.indexOf(currentPic);
        setCurrentPic(currentPicIndex >= props.images.length-1 ? props.images[0]: props.images[++currentPicIndex])
    }

    const handleLeftClick = () => {
        let currentPicIndex = props.images.indexOf(currentPic);
        setCurrentPic(currentPicIndex <= 0 ? props.images[props.images.length-1]: props.images[--currentPicIndex])
    }
    return (
        <div>
            <button onClick={() => handleLeftClick()}>Left</button>
            <img src={currentPic} alt="Pic"/>
            <button onClick={() => handleRightClick()}>Right</button>
        </div>
    )
}

export default Carousel;