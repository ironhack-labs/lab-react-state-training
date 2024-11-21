import { useState } from "react";
import facePicture from "../assets/images/maxence.png";
import faceGlasses from "../assets/images/maxence-glasses.png";

function ClickablePicture() {
    const [isWearingGlasses, setIsWearingGlasses] = useState(false);

    const toggleGlasses = () => {
        setIsWearingGlasses(prevState => !prevState);
    };

    return (
        <div>
            <img 
                onClick={toggleGlasses} 
                src={isWearingGlasses ? faceGlasses : facePicture} 
                alt="face of a boy" 
            />
        </div>
    );
}

export default ClickablePicture;
