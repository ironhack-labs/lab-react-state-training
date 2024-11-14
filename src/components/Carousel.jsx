import { useState } from "react"

export default function Carousel(props) {
    const [currentImage, setCurrentImage] = useState(0)
    const changeImage = (direction) => {
        if (currentImage < 1) {
            setCurrentImage(props.images.length - 1)
        } else {
            setCurrentImage((currentImage + direction) % props.images.length)
        }

        // console.log(currentImage);

    }

    return (
        <div>
            <button onClick={() => { changeImage(-1) }}>left</button>
            <img src={props.images[currentImage]} alt="" />
            <button onClick={() => { changeImage(+1) }}>right</button>
        </div>

    )
}

