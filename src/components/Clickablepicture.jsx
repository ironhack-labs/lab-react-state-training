import { useState } from "react";
import user from "../assets/images/maxence.png";
import userGlasses from "../assets/images/maxence-glasses.png";

function ClickablePicture() {

    
    const [withGlasses, setWhithGlasses] = useState(false);

    const toggleImage = () => {
        setWhithGlasses(!withGlasses);
    };

    return (
        <div>
            <img
        src={withGlasses ? userGlasses : user}
        alt="profile"
        onClick={toggleImage}/>

        </div>
    );
}

export default ClickablePicture;