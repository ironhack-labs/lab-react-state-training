import { useState } from "react";

import maxenceImg from "../assets/images/maxence.png";
import maxenceGlassesImg from "../assets/images/maxence-glasses.png";

function ClickablePicture() {
    const [withGlasses, setWithGlasses] = useState(false);

    function handleClick() {
        setWithGlasses(!withGlasses);
    }

    return (
        <div>
            <img
              src={withGlasses ? maxenceGlassesImg : maxenceImg} alt="Maxence" onClick={handleClick} style={{cursor: "pointer"}} />
        </div>
    );
}

export default ClickablePicture;