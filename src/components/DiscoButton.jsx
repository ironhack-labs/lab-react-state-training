import { useState} from 'react';


const buttonColors = ["purple", "blue", "green", "yellow", "orange", "red"];
function DiscoButton () {
    const [count, setCount] = useState(0);
    const [buttonColor, setButtonColor] = useState(buttonColors[Math.floor(Math.random() * 6)]);

    function handleClick () {
        setCount(count +1 );
        setButtonColor(buttonColors[Math.floor(Math.random() * 6)]);
    }
    return (
        
    <>
        <button onClick = {handleClick} style= {{backgroundColor: buttonColor}}> {count} Likes</button>
    </>
    )
}







export default DiscoButton;