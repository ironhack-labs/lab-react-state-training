import { useState } from "react";

function DiscoButton () {

    const [likes, setLikes] = useState(0)
    const [color, setColor] = useState(0)

    const colors = ["purple", "blue", "green", "yellow", "orange", "red"]

    function newLike() {
        setLikes(likes+1)
        setColor((color+1)%colors.length)
    }

    return(

        <div>
            <button onClick={newLike} style={{backgroundColor:colors[color]}}>{likes} likes</button>
        </div>
    )
}

export default DiscoButton