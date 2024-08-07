import { useState } from 'react';

function Header(){

const [counter, setCounter] = useState(0);
const increaseCounter = () =>{
    setCounter(counter +1);
}
    return (
        <button onClick={increaseCounter}>{counter}Likes </button>
    )

}

export default Header;