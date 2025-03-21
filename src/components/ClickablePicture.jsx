import{useState} from "react"
import maxenceImg from "../assets/images/maxence.png"
import maxenceImgGlass from "../assets/images/maxence-glasses.png"



function ClickablePicture(){
    const [withGlasses, setWithGlasses] = useState(false)

    const handleClick = () => {
        setWithGlasses(!withGlasses);
    };

    return (
<div>
    <img
    src={withGlasses ? maxenceImgGlass : maxenceImg}
    alt="clickable"
    onClick={handleClick}
    style={{ cursor: "pointer" }}
    />
</div>
    )
}

export default ClickablePicture