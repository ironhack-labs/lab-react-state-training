import { useState } from "react";
import image1 from "../assets/images/maxence.png";
import image2 from "../assets/images/maxence-glasses.png";

export default function ClickablePicture() {

    const [glasses, setGlasses] = useState(false);

    const toggleGlasses = () => {
        setGlasses(!glasses);
    }

    return (
        <div>
            <img src={glasses ? image2 : image1} onClick={toggleGlasses} style={{ cursor: "pointer"}} className="image"/>
        </div>
    )
}