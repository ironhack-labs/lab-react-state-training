import { useState } from "react";

function LikeButton(){
    const [counter, setCounter] = useState(0); 
    return(<button onClick={()=> setCounter(counter+1)}>{counter} Likes</button>)
}

export default LikeButton;