import { useState } from "react";


function LikeButton() {

    const [counter1, setCounter1] = useState(0);

    const handleLike1 = () => {
        setCounter1(counter1 + 1);
    }

    const [counter2, setCounter2] = useState(0);

    const handleLike2 = () => {
        setCounter2(counter2 + 1);
    }
    
    return(
        <div className="btn-container">
            <button onClick={() => handleLike1()}>{counter1} Likes</button>
            <button onClick={() => handleLike2()}>{counter2} Likes</button>
        </div>
    )
}

export default LikeButton;