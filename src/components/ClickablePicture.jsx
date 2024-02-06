import React from "react";
import { useState } from "react";

function ClickablePicture () {

 const [pic, changePic] = useState("./assets\images.maxence.png")

const togglePics = () => {
    changePic(pic);
}
return (
    <div>
        <img src={pic} onClick={handleClick} />
    </div>
)

}