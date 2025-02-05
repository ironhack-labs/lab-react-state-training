import React, { useState } from "react";
import "./Likebutton.css";
function Likebutton(){
   const [counter, setCounter] = useState(0);
   const Increment =()=>{
    setCounter(counter+1);
   
   }
   const [counter1, setCounter1] = useState(0);
   const Increment1=()=>{
    setCounter1(counter1+1);
   }
   
return(
    <div className="LikeButton">
        <button onClick={Increment}>{counter}Likes</button>
        <button onClick={Increment1}>{counter1}Likes</button>
    </div>
)

}
export default Likebutton;