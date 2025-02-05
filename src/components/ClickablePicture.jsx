import { useState } from "react";
export default function ClickablePicture(props) {
    const [img, setImg] = useState(props.img);
    return (
        <img src={img} onClick={() => setImg(img === props.img ? props.imgClicked : props.img)} />
    );
}