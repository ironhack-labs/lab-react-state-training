import { useState } from "react";

function ClickablePicture() {
    const [hiden, setHiden] = useState(false)

    const toggleImage = () => {
        setHiden((prevIsGlasses) => !prevIsGlasses);
    };

    return (
        <div className="img-container">
            {hiden ? (
                <img src="./src/assets/images/maxence-glasses.png" alt="img-con gafas" onClick={toggleImage} />
            ) : (
                <img src="./src/assets/images/maxence.png" alt="img-sin gafas" onClick={toggleImage} />
            )}
        </div>
    );
}

export default ClickablePicture;