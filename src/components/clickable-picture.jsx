import { useState } from "react";

function ClickablePicture({imageOn ="", imageOff="", className = ""}) {
    const [areGlassesOn, setGlassesOn] = useState(false);

    return (
        <div className={`${className}`}>
            <button className="p-0 border-0" onClick={() => setGlassesOn(!areGlassesOn)}>
                <img  src={areGlassesOn ? imageOn : imageOff} alt="glasses" />
            </button>
        </div>
    );
}

export default ClickablePicture;