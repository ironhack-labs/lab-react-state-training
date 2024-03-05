import {useState} from 'react';


export const Counter = () => {

    const [counter, setCounter] = useState(0);
    const increment = () => {
        setCounter(counter+1);
    }
    const decrement = () => {
        setCounter(counter-1);
    }
    

    return <>
        <button onClick={decrement}>minus</button>
        <h1>{counter}</h1>
        <button  onClick={increment}>plus</button>
    </>
    
};
