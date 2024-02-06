import {useState} from 'react';
import noGlasses from '/src/assets/images/maxence.png'
import glasses from '/src/assets/images/maxence-glasses.png'

function ClickablePicture () {

    const [toggle, setToggle] = useState(true);

    const handleClick = () => setToggle(!toggle);

    return(
        <div>
             
             <img src={toggle ? noGlasses : glasses} onClick={handleClick}></img>
            
        </div>
    )

}

export default ClickablePicture;