import { useState } from "react";

export default function ClickablePicture({img, imgClicked}) {
    const [currentImg, setImg] = useState(img);

    function changeImg() {
        setImg(currentImg === img ? imgClicked : img);
    }

    return (
        <div className="clickable-picture-container">
            <img src={currentImg} 
            onClick={changeImg} alt = "clickable"/>
        </div>
    );
}
