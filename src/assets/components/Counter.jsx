import { useState } from 'react'

function Counter({initial = 0}) {
    const [count, setCount] = useState(initial);

    const increaseNum = () => {
        setCount(prev => prev + 1);
    }
    const decreaseNum = () => {
        setCount(prev => Math.max(0, prev - 1));
    }

  return (
    <section className="iteration" id="Counter"> 
    <header className="header">Iteration 2 | Counter</header>
        <button className="button" onClick={increaseNum}> + 
        </button> 
        <span className="count">{count}</span>
        <button className="button" onClick={decreaseNum}> -
        </button>
</section>
  )
}

export default Counter

/*
function Counter() {
    const [counter, setCounter] = useState(0);

  return (
    <section className="iteration" id="Counter"> 
    <header className="header">Iteration 2 | Counter</header>
        <button className="button" onClick={() => }> + 
        </button> 
        <span className="count">{count}</span>
        <button className="button" onClick={decreaseNum}> -
        </button>
</section>
  )
}
*/