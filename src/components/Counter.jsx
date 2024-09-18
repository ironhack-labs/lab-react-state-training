import {useState} from 'react'

function Counter() {
    let [counter, setCounter] = useState(0)

    const [ valorRegistrado,setvalorRegistrado ] = useState(null)
    
    const increase = () => {
    
        setCounter (counter + 1)
    } ;
    const decrease = () => {
    
        setCounter (counter - 1)
    }
    return (
        <div>
<h2>{counter}</h2>
<button  onClick={increase} className='Bt1'>+ </button>

<button onClick={decrease}>-</button>

        </div>
    
    );
       
    };
    
export default Counter