import { useState } from "react";
import '../App.css'

function Counter (){


const[count , setCount] = useState(0);

const update = (elem) => {
    const value= count+elem;
    setCount(value)
}
    

return (
    <div className="display">
    <button  className= "btn" onClick ={()=> {update(-1)}} > - </button>
    <p> {count} </p>
    <button  className= "btn" onClick ={()=> {update(1)}} > + </button> 
    
    
    
    </div>
)

}
export default Counter;