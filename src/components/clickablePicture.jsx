import { useState } from "react";
import '../App.css'

function ClickablePicture() {
    let [flag, setFlag] = useState(false);
    let imageSrc1 = './src/assets/images/maxence.png';
    let   imageSrc2 = './src/assets/images/maxence-glasses.png'
    function changeImg() {
        setFlag(!flag);
        console.log(flag);    

    }
    return (<>
        <img onClick={changeImg} src={flag ? imageSrc1 : imageSrc2}></img>
    </>)
}
export default ClickablePicture;