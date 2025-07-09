import { useState } from "react";

function ClickablePicture() {
    const imageGlasses = "src/assets/images/maxence-glasses.png"
    const imageNoGlasses = "src/assets/images/maxence.png"

    const [image, setImage] = useState(imageNoGlasses);



    const toggleImage = () => {
        if (image === imageNoGlasses) {
            setImage(imageGlasses);
        }
        else {
            setImage(imageNoGlasses);
        }
    }

    // const images = ["src/assets/images/maxence-glasses.png", "src/assets/images/maxence.png"]
    // const [image, setImage] = useState(1);
    // const toggleImage = () => setImage(1 - image);
    return (
        <>
        <img onClick={toggleImage} src={image} alt="" />

        {/* <img onClick={toggleImage} src={images[image]} alt="" /> */}
        </>
    )
}

export { ClickablePicture };