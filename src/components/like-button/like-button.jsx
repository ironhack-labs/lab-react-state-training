import { useState } from "react";

function LikeButton({className}) {
    const [count, setCount] = useState(0);

    const handleCountUp = () => {
        setCount(count +1);
    }

    return (
    <div>
        <button className={`btn btn-sm border btn-light ${className}`} onClick={handleCountUp}>{count} Likes</button>
    </div>
    )
}

export default LikeButton;