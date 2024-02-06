import { useState } from 'react';

import maxence from "../assets/images/maxence.png";

import maxenceGlasses from "../assets/images/maxence-glasses.png";
function ClickablePicture() {

    const [count5, setCount5] = useState(true);
    //     const[count4, setCount4] = useState(0);
    //     if(count4 === 1) {
    //         document.getElementById("buttonImg").className = "pinkButton";
    //     }
    //     else {
    //         document.getElementById("buttonImg").className = "redButton";
    //     }
    let image;

    if (count5 === true) {
        image = maxence;
    }

    else {
        image = maxenceGlasses;
    }

    return (
        <span>
            <img src={image}/*id="buttonImg" class="pinkButton"*/ onClick={() => count5 === true ? setCount5(false) : setCount5(true)} />
        </span>
    )
}

export default ClickablePicture