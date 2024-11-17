import {useState} from "react";

const color = ["purple", "blue", "green", "yellow", "orange", "red"];

function LikeButton({className = ""}) {
    const [count, setCount] = useState (0);
    const [currentColor, setCurrentColor] = useState(colors[0]);
    const color = ["purple", "blue", "green", "yellow", "orange", "red"];

    const handleCount = () => {
        setCount(count + 1);
    }

    const handleColor = () => {
        const newColor = colors[Math.floor(Math.random() * colors.length)];
        setCurrentColor(newColor);
    }

    function handleClick () {
        handleCount();
        handleClick();
    }




    return(
        <>
        <button type="button" className={`btn btn-${currentColor} btn-lg m-3`} onClick={handleClick}>
        {count} Likes</button>
        </>
    )
};
export default LikeButton;