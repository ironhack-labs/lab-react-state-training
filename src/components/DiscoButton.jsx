import { useState } from "react";
import "./discoButton.css"

function DiscoButton(){

    let colorArr = ["purple", "blue", "green", "yellow", "orange", "red"]
    let randomNum = Math.floor(Math.random()*(colorArr.length) )

    const[likeCount, setLikeCount] = useState(0);
    const[color, setColor] = useState(colorArr[0]);

    function completeAction(){
        setLikeCount(likeCount+1);
        
        let newColor = colorArr[randomNum];
        setColor(newColor);
    }

    return (
        <button className="disco-btn" style={{backgroundColor: color}}
            onClick={()=>completeAction()}>{likeCount} Likes
        </button>
    )
}

export default DiscoButton;