import React, { useState } from 'react'

const Carousel = ({ images }) => {
    const [index, setIndex] = useState(0)

    const goLeft = () => {
        setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    }

    const goRight = () => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length)
    }

    return (
        <div>
            <button onClick={goLeft}>Left</button>
            <img src={images[index]} alt="Carousel" style={{ width: '200px', height: 'auto' }} />
            <button onClick={goRight}>Right</button>
        </div>
    )
}
export default Carousel
