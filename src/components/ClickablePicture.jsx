import { useState } from "react";
import Image1 from '../assets/images/maxence.png'
import Image2 from '../assets/images/maxence-glasses.png'
function ClickablePicture() {
    const [picture, setPicture] = useState(Image1);
    function togglePicture() {
        if (picture === Image1) {
            setPicture(Image2)
        } else {
            setPicture(Image1)
        }
    }
    return (
        <div>
            {/*picture ? ()=>setPicture(Image2) : Image1*/}
            <img onClick={() => { togglePicture() }} src={picture} alt="Image1" />
        </div>
    )
}
export default ClickablePicture