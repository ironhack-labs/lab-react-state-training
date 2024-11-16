import LikeButton from "../likeButton/likeButton";
import { useState } from "react";

function DiscoButton ({initialColor = 'primary', className = ''}) {
    const [color, setColor] = useState(initialColor);
    const colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];


    const handleChangeColor = () => {
        const currentIndex = colors.indexOf(color);
        const nextIndex = (currentIndex + 1) % colors.length; 
        setColor(colors[nextIndex]);
    };

    
    return (
        <>
            <LikeButton color={color} className={className} onClick={handleChangeColor} />  
        </>
        
    )
}
export default DiscoButton