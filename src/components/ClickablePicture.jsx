import React, { useState } from 'react';

function ClickablePicture() {
    const [clicked, setClicked] = useState(false);
    const click = () => setClicked(!clicked);
    const picDefault = "src/assets/images/maxence.png";
    const picClicked = "src/assets/images/maxence-glasses.png";

    return (
        <div>
            <img onClick={click} src={clicked ? picClicked : picDefault}></img>
        </div>
    );
}

export default ClickablePicture;
