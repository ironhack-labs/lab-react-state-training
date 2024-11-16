import { useState } from "react";

function DiscoButton() {
    //Likes counter:
    const [count, setCount] = useState(0);

    //Change button color
    const colors = ["purple", "blue", "green", "yellow", "orange", "red"];
    const [ indexColor, setIndex ] = useState(0);

    //Add shadow:
    const [ isClicked, setShadow ] = useState(false);
    const handleCounter = () => {
        setShadow(true);
        setCount(count + 1);
        setIndex( indexColor < colors.length -1 ? indexColor + 1 : 0 );
        setTimeout(() => {
            setShadow(false);
        }, 1000);
    }

    
    return (
        <div>
           <button className={`btn text-white rounded-0 ${isClicked ? "shadow-lg" : ""}`} onClick={handleCounter} style = {{
                backgroundColor: colors[indexColor]
            }}> 
            {count} Likes
            </button> 
        </div>
    );
}

export default DiscoButton;