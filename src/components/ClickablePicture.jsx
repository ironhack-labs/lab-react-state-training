import { useState } from "react";

function ClickablePicture () {
    const [hasGlasses, setHasGlasses] = useState(false);

    const toggleImage = () => {
        setHasGlasses(!hasGlasses);
    }

    return (
        <img 
            src={hasGlasses ? '/maxence-glasses.png' : '/maxence.png'} 
            alt="Maxence picture"
            onClick={toggleImage}
            className="clickable-image"
        />
    )
}

export default ClickablePicture;