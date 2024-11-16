import imgWithoutGlasses from "../../assets/images/maxence.png"
import imgWithGasses from "../../assets/images/maxence-glasses.png"
import { useState } from "react";
function ClickablePicture({className = ''}) {

    const [imageUrl, setImageUrl] = useState(imgWithoutGlasses)

    const handleChangeImage = () => {
        if(imageUrl === imgWithGasses) setImageUrl(imgWithoutGlasses);
        else setImageUrl(imgWithGasses);
    }
    return (
        <> 
            <img className={className} onClick={handleChangeImage} src={imageUrl} />
        </>
    )
}
export default ClickablePicture;