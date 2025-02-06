import { useState } from "react";

export default function ClickablePicture () {
    const imgNoGlasses = "../src/assets/images/maxence.png";
    const imgGlasses = "../src/assets/images/maxence-glasses.png";

    const [showGlasses, setShowGlasses] = useState(false);

    const toggleShowGlasses = () => setShowGlasses(!showGlasses);

    return (
        <>
            <img className="guy-image" onClick={() => toggleShowGlasses()} src={showGlasses ? imgGlasses : imgNoGlasses} alt="guy face" />
        </>
    );
}