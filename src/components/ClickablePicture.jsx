import { useState } from "react";

function ClickablePicture() {
    
    const [clicked, setClicked] = useState(false);
    const togglePicture = () => {
        setClicked(!clicked);
    };

    return (
        <img
            onClick={togglePicture}
            src={
                // Si clicked true, si clicked false
                clicked
                    ? "/src/assets/images/maxence-glasses.png"
                    : "/src/assets/images/maxence.png"
                }
                alt="Maxence"
                width="200"
        />
    );
}


export default ClickablePicture;