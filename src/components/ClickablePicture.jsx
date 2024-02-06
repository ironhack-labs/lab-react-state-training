import { useState } from "react";

function ClickablePicture(){
    const [firstToggled, setFirstToggled] = useState(true);
    const [secondToggled, setSecondToggled] = useState(false);

    const toggleFirstImage = () => {
        setFirstToggled(!firstToggled);
        setSecondToggled(true); 
    };

    const toggleSecondImage = () => {
        setSecondToggled(!secondToggled);
        setFirstToggled(true); 
    };

    return (
        <div style={{ display: "flex", border: "2px solid black" }}>

        <div className="pictures" >
            {/* Render first image */}
            {firstToggled && <img src="src\assets\images\maxence.png" alt="First Image" onClick={toggleFirstImage} width={200} height={200}/>}
            
            {/* Render second image */}
            {secondToggled && <img src="src\assets\images\maxence-glasses.png" alt="Second Image" onClick={toggleSecondImage} width={200} height={200}/>}
        </div>
        </div>
    );
}

export default ClickablePicture;