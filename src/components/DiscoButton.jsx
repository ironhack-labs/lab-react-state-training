import { useState } from "react";

function DiscoButton() {

    const [counterValue, setCounterValue] = useState(0);
    const [colorButton, setColorButton] = useState('purple');

    const colors = ["purple", "blue", "green", "yellow", "orange", "red"];

    function incrementLikes() {

        let newColorButton = colors[((counterValue + 1) % colors.length)]
        setColorButton(newColorButton);
        setCounterValue(counterValue + 1);
    }

    return(
        <button style={{background: colorButton, color: 'white'}} onClick={incrementLikes}>{counterValue} Likes</button>
    )
}



export default DiscoButton;