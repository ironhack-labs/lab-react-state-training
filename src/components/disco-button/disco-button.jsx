import { useState } from "react";

function DiscoButton () {
    const colours = ["purple", "blue", "green", "yellow", "orange", "red"]
    const [like, setLike] = useState(0)
    const [colorIndex, setColorIndex] = useState (0)

    function likeCounter () {
        setLike(like +1); 
        setColorIndex ((colorIndex + 1) % colours.length)
    }

        return (

        <button 
        className="button" 
        onClick={likeCounter}
        style={{
            fontSize: "25px",
            padding: "5px",
            backgroundColor: colours[colorIndex],
            color: "black",
            fontWeight: "bold",
            borderRadius: "30%",
            gap: "15px", 
            margin: "15px"
        }}
        >{like} likes </button>
        )
    }


export default DiscoButton