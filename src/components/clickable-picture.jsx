
import { useState } from "react";
import maxWithGlases from "../assets/images/maxence-glasses.png";
import maxWithOutGlases from "../assets/images/maxence.png";

function ClickablePicture () {

    let [glasses, setGlasses] = useState(false);

    return (
        <button onClick={() => {
            setGlasses(!glasses)
        }}> 
            <img src={ glasses && maxWithGlases || maxWithOutGlases } alt="glasses" />
        </button>
    );
}

export default ClickablePicture;