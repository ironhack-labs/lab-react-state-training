import {useState} from 'react'
import noGlasses from "../assets/images/maxence.png"
import glasses from "../assets/images/maxence-glasses.png"

export default function ClickablePicture() {

const [isClicked, setIsClicked] = useState(false)

const handleClick = () => {
    setIsClicked(!isClicked)
};

return (
    <img 
    src={isClicked ? noGlasses : glasses}
    onClick ={handleClick}
    />
);
}