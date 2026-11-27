import {useState} from 'react';
import maxImg from '../assets/images/maxence.png';
import maxGlassesImg from '../assets/images/maxence-glasses.png';

function ClickablePicture(){

    const [isWithGlasses,setGlasses] = useState(false);

    const toggleGlasses = ()=>{
        setGlasses(!isWithGlasses)
    }

    let img = undefined;
    
    if(!isWithGlasses){
        img = maxImg;
    } else { img = maxGlassesImg}

    return(
        <img onClick = {toggleGlasses} src={img} alt="" />
    )
}

export default ClickablePicture