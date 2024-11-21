import { useState} from 'react';


function DiscoButton () {

    const colorArray = ["purple", "blue", "green", "yellow", "orange", "red"];
    const [count, setCount] = useState(0);
    const [buttonColor, setButtonColor] = useState(colorArray[Math.floor(Math.random() * 6)]);

    function handleClick () {
        setCount(count +1 );
        setButtonColor(colorArray[Math.floor(Math.random() * 6)]);
    }
    return (
        
    <>
        <button onClick = {handleClick} style= {{backgroundColor: buttonColor}}> {count} Likes</button>
    </>
    )
}

export default DiscoButton;