import { useState } from "react";
import "./ClickablePicture.css";
import pic1 from "../assets/images/pic1.png"
import pic2 from "../assets/images/pic2.png"

const ClickablePicture = () => {
    const [imgUrl, setImgUrl] = useState(pic1);
    console.log();
    return (
        <>
            <img onClick={() => imgUrl.includes("pic1") ? setImgUrl(pic2) : setImgUrl(pic1)} className="img-profile" src={imgUrl} alt="" />
        </>
    )
};

export default ClickablePicture;