import { useState } from "react";
import "./ClickablePicture.css"
import Image1 from "../assets/images/maxence.png";
import Image2 from "../assets/images/maxence-glasses.png";

export default function ClickablePicture() {
    const [imageValue, imageValueSet] = useState(Image1);

    return(
        <div className="ClickablePicture">
            <p>Iteration 3</p>
            <img src={imageValue} alt="Max" onClick={() => imageValue === Image1 ? imageValueSet(Image2) : imageValueSet(Image1)}/>
        </div>
    )
}