import { useState } from 'react'

function Counter() {
let [count, setCount] = useState(0)

const handleIncrease = () => {
    setCount(count + 1)
}

    const handleDecrease = () => {
        setCount(count - 1)

}

    return(
<div className='count'>
<button disabled={count <= 0 } onClick={ handleDecrease } className='decrease'><b>-</b></button>
    <h1 style={{fontSize: '3rem', margin: 'auto'}}>{count}</h1>
    <button onClick={ handleIncrease } className='increase'><b>+</b></button>
</div>
    )
}

export default Counter