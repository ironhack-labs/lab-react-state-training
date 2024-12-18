import image from './../assets/images/maxence.png' 
import imageGlasses from './../assets/images/maxence-glasses.png'
import { useState } from "react";

function ClickablePicture(){
    const [show, setShow] = useState(false); 
    return(<div className='images' onClick={()=>setShow(!show)}>
        <img src={image} alt="friendly man"/>
        {show && <img className="glasses" src={imageGlasses} alt="friendly man with glasses"/>}
    </div>)
}
export default ClickablePicture;