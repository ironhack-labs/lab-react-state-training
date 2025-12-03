import { useState } from "react";
import img1 from "../assets/images/maxence.png";
import img2 from "../assets/images/maxence-glasses.png";

function ClickablePicture() {
    const [showGlasses, setShowGlasses] = useState(false);

    function handleClick() {
        setShowGlasses(!showGlasses);
    }

    return (
        <div>
            <img
                src={showGlasses ? img2 : img1}
                alt="clickable"
                onClick={handleClick}
                style={{ width: "200px", cursor: "pointer" }}
            />
        </div>
    );
}

export default ClickablePicture;