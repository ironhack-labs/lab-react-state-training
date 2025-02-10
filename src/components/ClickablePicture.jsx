import { useState } from "react";
import foto from "../assets/images/maxence.png";
import fotoGafas from "../assets/images/maxence-glasses.png";

function ClickablePicture() {
    const [clicked, setClicked] = useState(false);

    return (
        <>
        <p>Iteration 3 - ClickablePicture</p>
        <img src={clicked ? fotoGafas : foto} 
        alt="Clickable picture" 
        onClick = {() => setClicked(!clicked)}
        className="clickable-picture"
        />
        </>
    );
}

export default ClickablePicture;