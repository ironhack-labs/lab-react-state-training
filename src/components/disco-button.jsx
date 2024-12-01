import { useState } from "react";

function DiscoButton (){
    const [likes, setLikes] = useState(0); 
    const [bColor, setColor] = useState(0); 
    const colorArray = ["purple", "blue", "green", "yellow", "orange", "red"];

    const handleClick= () =>{
        setLikes ((prevLikes ) => prevLikes + 1);
        setColor ((prevColor)=> (prevColor + 1) % colorArray.length); 
    }

    return (
        <button type="button" className = "btn my-2" style = {{backgroundColor: colorArray [bColor], color: "white", padding: "10px 20px"}} onClick= {handleClick}  > {likes} Likes </button>
    );
}

export default DiscoButton;