import React, {useState} from "react";


function Counter(){

    const [count, setCount]= useState(0);

    const increment= ()=>{

        setCount(count +1);
    };
    const decrement = () => {

        setCount(count -1);
    };

return (
 <>
 <div className="counter">

 <button onClick={increment}>+</button>

 {count}

 <button onClick={decrement}>-</button>

</div>
 

 </>
);

}

export default Counter;