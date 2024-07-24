import { useState } from "react"

const Carousel = ({ images }) => {

    const [counter, setCounter] = useState(0)

    console.log

    const nextButton = (props) => {
        props && setCounter((prevState) => prevState > 0 ? prevState - 1 : (images.length - 1))
        !props && setCounter((prevState) => prevState <= (images.length - 2) ? prevState + 1 : 0)
    }

    return (
        <>
            <button className="galleryButtonleft" onClick={() => { nextButton(true) }}>Left</button>
            <img src={images[counter]} alt="" />
            <button className="galleryButtonRight" onClick={() => { nextButton(false) }}>Right</button>
        </>
    )
}

export default Carousel