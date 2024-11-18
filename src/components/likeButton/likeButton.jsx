import { useState } from "react";

function LikeButton({ className = "", variant = "primary" }) {
    const [count, setCount] = useState(0);

    const handleCount = () => setCount(count + 1);

    return (
        <button 
            type="button" 
            className={`m-3 btn btn-outline-${variant} btn-lg ${className}`} 
            onClick={handleCount}
        > 
            {count} Likes 
        </button>
    );
}

export default LikeButton;
