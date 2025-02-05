import {useState} from 'react'

export default function Counter() {

const [count, setCount] =  useState(0);

const handleClick = (newCount) =>{
    if (newCount>=0){
    setCount(newCount)
}
}

return (
    <div>
    <button onClick={() => handleClick(count - 1)}>-</button>
    <p>{count}</p>
    <button onClick={() => handleClick(count + 1)}>+</button>
    </div>
);
}

