import { useState } from "react"

function ClickablePicture() {

    const pic1 = "src/assets/images/maxence.png"
    const pic2 = "src/assets/images/maxence-glasses.png"

    const click = () => {
        setCurrentPicture((element) => (element === pic1 ? pic2 : pic1));
    };

    const [currentPicture, setCurrentPicture] = useState(pic1);
    return (
        <>
            <img
                src={currentPicture}
                alt=""
                onClick={click}
            />
        </>
    )

}

export default ClickablePicture