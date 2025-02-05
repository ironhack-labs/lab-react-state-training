import { useState } from "react";
import '../App.css'


function LikeButton (){


const[counter , setCounter] = useState(0);

const update = (elem) => {
    const value= counter+elem;
    setCounter(value)
}
    

return (
    <div>
    <button className ="like" onClick ={()=> {update(1)}} > {counter} Likes </button>
  { /*  <button className ="like2" onClick ={()=> {update(1)}} > {count} Likes </button> */}
    
    
    
    </div>
)

}
export default LikeButton;