import { useState } from "react";
import img1 from '../assets/images/maxence.png';
import img2 from '../assets/images/maxence-glasses.png'



 function ClickablePicture () {
 
    const[image ,setImage] = useState(img1)

    const changeImage = () =>{
        setImage((newImage) => (newImage === img1 ? img2 : img1));
    };
    return (
<>
<img src={image} alt="Toggleable" onClick={changeImage} />
</>
    )
}


export default ClickablePicture;