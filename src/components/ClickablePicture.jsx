import {useState} from "react";
import facePicture from "../assets/images/maxence.png";
import faceGlasses from "../assets/images/maxence-glasses.png";

function ClickablePicture () {
    const [glassesOn, setGlassesOn] = useState(false);
    function UpdateGlass () {
        setGlassesOn(!glassesOn);
    }

    return (
        <>
        <div>
        <img onClick={UpdateGlass} src={glassesOn ? faceGlasses : facePicture} alt="face of a boy" />
        </div>
        </>
    )
}
export default ClickablePicture;