import React, { useState } from 'react';

function Carousel() {
    const [index, setIndex] = useState(0);
    const increment = () => {
        setIndex((index + 1) % images.length);

    };
    const decrement = () => {
        setIndex((index - 1) % images.length);

    };

    const images=[
        "https://randomuser.me/api/portraits/women/1.jpg",
        "https://randomuser.me/api/portraits/men/1.jpg",
        "https://randomuser.me/api/portraits/women/2.jpg",
        "https://randomuser.me/api/portraits/men/2.jpg"
      ];

    return (
        <div style={{display: 'flex'}}>
            <button onClick={() => decrement()}>Left</button>
            <img style={{width: "200px", height: "200px"}} src={images.at(index)}></img>
            <button onClick={() => increment()}>Right</button>
        </div>
    );
}

export default Carousel;
