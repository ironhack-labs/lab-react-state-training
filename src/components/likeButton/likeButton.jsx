import { useState } from "react"

function LikeButton({className = '', color = 'secondary', onClick}) {
    const [count, setCount] = useState(0);
    
    const handleCounter = () =>{
        setCount(count + 1);

        if(onClick) {
            onClick();
        }
    }
    return(
        <>
            <button type="button" className={`btn btn-${color} btn-lg m-3 ${className}`} onClick={handleCounter}>{count} Likes</button>
        </>
    )
}
export default LikeButton
    
