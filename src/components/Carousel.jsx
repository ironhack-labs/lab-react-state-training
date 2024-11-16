import {useState} from 'react';

function Carousel (props) {
    const [index, setIndex] = useState(0);
    
    function handleClickRight () {
        const hasNext = index < props.images.length - 1;
        if (hasNext) {
            setIndex(index +1);
        } else {
            setIndex(0);
        }
    }
    function handleClickLeft() {
        const hasNext = index > 0;
        if (hasNext) {
            setIndex(index -1);
        } else {
            setIndex(props.images.length - 1);
        }
    }

    return (
        <>
        <button onClick = {handleClickLeft}>Left</button>
        <img src= {props.images[index]} alt = "random image"/>
        <button onClick = {handleClickRight}>Right</button>
        </>
    )
}

export default Carousel;
