import { useState } from "react";

function ClickablePicture({ className = "", on, off }) {
    const [src, setSrc] = useState(off);
    
    const handleClick = () => {
        setSrc( src === off ? on : off);
    };

     return (
        <div className={`d-flex justify-content-center ${className}`}>
            <img className="img-fluid w-25" src={src} alt="image" onClick={handleClick} />
        </div>
     );
}

 export default ClickablePicture;