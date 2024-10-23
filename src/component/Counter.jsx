import React from "react";
import {useState} from "react";
import App from "../App";
function Counter(){
const[counter,setcounter]=useState(0);
return(
    <div className="mainbutton">
    <button className=" clickboutton" onClick={() => setcounter(counter + 1)}>+</button>
    <p className="buttonNumber"> {counter}</p>
    <button className=" clickboutton" onClick={() => setcounter(counter > 0 ? counter - 1:0)}>-</button>
    </div>
)
}
export default Counter;