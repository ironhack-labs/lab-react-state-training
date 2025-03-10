import { useState } from "react";

const image1 = "/src/assets/images/maxence.png"
const image2 = "/src/assets/images/maxence-glasses.png"

function ClickablePicture({className = ''}) {

    const [prevImage, setImage] = useState(image1)

    const toggleImage = () => {
        if (prevImage === image1) {
            setImage(image2)
        } else {
            setImage(image1)
        }
    }

    return (
        <>
    <div className={` ${className}`}>
        <img src={prevImage} alt={prevImage} onClick={toggleImage} style={{width : "200px"}}/>
    </div>
        </>
    )
}
export default ClickablePicture;