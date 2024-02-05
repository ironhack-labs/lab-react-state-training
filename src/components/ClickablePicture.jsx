import {useState} from 'react';

function ClickablePicture () {

    const [toggle, setToggle] = useState(true);

    const handleClick = () => setToggle(!toggle);

    return(
        <div>
             {toggle ?
             <img src="./src/assets/images/maxence.png" onClick={handleClick}></img>
            :
            <img src="./src/assets/images/maxence-glasses.png" onClick={handleClick}></img>
            }
        </div>
    )

}

export default ClickablePicture;