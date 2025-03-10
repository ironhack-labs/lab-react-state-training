import React, {useState} from "react";

function Counter(){
    const [count, setCount] = useState(0);

    const handleIncrement =() =>{
        setCount(count + 1)
    }

    const handleDecrement = () => {
        if (count > 0){
            setCount(count - 1)
        }
        
    }

    
    return (
       
            <div className="Counter" style={{border:'1px solid blue', display:'flex', gap:'2rem', width:'120px'}}>
                <button type="button" onClick={handleDecrement}>-</button>
                {count}
                <button type="button" onClick={handleIncrement}>+</button>
            </div>

        
    );
}
export default Counter;