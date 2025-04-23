import { useState } from "react";
import maxemaxenceGlassesnce from "../assets/images/maxence-glasses.png";
import maxence from "../assets/images/maxence.png";

function ClickablePicture() {
    const [glassesOn, setGlassesOn] = useState("maxence.png");
const changeImage = () => {
    setGlassesOn((prev) => !prev);
};
    return (
        <div>
            <img
            src = {glassesOn ? maxence : maxemaxenceGlassesnce}
            alt="maxence"
            onClick={changeImage}/>
        </div>
    );
}
export default ClickablePicture;