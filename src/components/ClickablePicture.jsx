import {useState} from "react"
import original from "../assets/images/maxence.png"
import sunglasses from "../assets/images/maxence-glasses.png"

function ClickablePicture() {
    const [image, setImage] = useState(original);

    function toggleImages() {
        if (image === original) {
            setImage(sunglasses);
        } else if (image === sunglasses) {
            setImage(original);
        }
    }


    return (
        <>
        <img src={image} alt="" onClick={() => toggleImages()}/>
        </>
    )
}

export default ClickablePicture;