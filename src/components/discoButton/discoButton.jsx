import { useState } from "react";

function DiscoButton() {
    const buttonColors = ["purple", "blue", "green", "yellow", "orange", "red"];
    const [count, setCount] = useState(0); 
    const [buttonColor, setButtonColor] = useState(0);

    const handleCounter = () => {
        setCount(count + 1);
        setButtonColor((prev) =>  {
            if (prev + 1 >= buttonColors.length) {
                return 0; 
            }
            return prev + 1; 
        });
    }

    return (
        <>
            <button className="btn btn-secondary btn-lg m-3" style={{ backgroundColor: buttonColors[buttonColor] }} onClick={handleCounter} >{count} Likes</button>
        </>
    )
}

export default DiscoButton;