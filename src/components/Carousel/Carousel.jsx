import { useState } from "react"

function Carousel({ images }) {

    const [picNumber, setPicNumber] = useState(3)
    const totalImages = images.length

    function handleLeftBtn() {
        if (picNumber > 0)
            setPicNumber(picNumber - 1)
    }

    function handleRightBtn() {
        if (picNumber < totalImages - 1)
            setPicNumber(picNumber + 1)
    }

    return (
        <div className="carousel">
            <button
                className="back-btn"
                type="button"
                onClick={handleLeftBtn}>
                Left
            </button>
            <img src={images[picNumber % totalImages]} alt="carousel" />
            <button
                className="fwd-btn"
                type="button"
                onClick={handleRightBtn}>
                Right
            </button>
        </div>
    )

}

export default Carousel