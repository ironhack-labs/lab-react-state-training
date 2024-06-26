import { useState } from "react"

const Carousel = ({ images }) => {

    const [pictureIndex, setPictureIndex] = useState(0)
    const [currentImage, setCurrentImage] = useState(images[pictureIndex]);

    const moveLeft = () => {
        // use new index right away for both states
        const newIndex = pictureIndex === 0 ?
                        images.length - 1
                        : pictureIndex - 1;
        setPictureIndex(newIndex);
        setCurrentImage(images[newIndex])
    }

    const moveRight = () => {
        const newIndex = pictureIndex === images.length - 1 ?
                        0 :
                        pictureIndex + 1;
        setPictureIndex(newIndex);
        setCurrentImage(images[newIndex]);
    }



    return (
        <div>
            <button onClick={moveLeft}>Left</button>
            <img src={currentImage} />
            <button onClick={moveRight}>Right</button>
        </div>
    )
}

export default Carousel;