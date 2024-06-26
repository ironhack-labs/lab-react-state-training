import { useState } from "react";

const DiscoButton = () => {

    const colorsArr = ["purple", "blue", "green", "yellow", "orange", "red"];

    const [likes, setLikes] = useState(0);
    const [color, setColor] = useState(colorsArr[0]);
    
    /*
    const incrementLikes = () => {
        setLikes(likes + 1);
    }

    const changeBgColor = () => {
        setColor(
            colorsArr[likes % colorsArr.length]
        )
    }
    */

    // set both likes and color in single function
    const handleClick = () => {
        setLikes((currentLikes) => {
            const newLikes = currentLikes + 1;
            setColor(colorsArr[newLikes % colorsArr.length]);
            return newLikes;
        });
    }


    return (
        <button className="disco-btn" style={{ backgroundColor: `${color}` }} onClick={handleClick}>{likes} Likes</button>
    );
}

export default DiscoButton;