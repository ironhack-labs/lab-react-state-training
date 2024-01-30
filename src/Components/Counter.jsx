import React, { useState } from 'react'

const counterBox = {
    border: '1px solid blue',
    padding: '20px 50px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
}

const buttonStyle = {
    padding: '10px',
    margin: '10px',
    width: '3em',
    height: '3em',
    fontSize: '1.5rem',
    backgroundColor: 'lightblue',
}

const Counter = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {

        if (count === 0) {
            return
        }

        setCount(count - 1)
    }

    return (
        <div style={counterBox}>
            <button style={buttonStyle} onClick={decrement}>-</button>
            <p>Count: {count}</p>
            <button style={buttonStyle} onClick={increment}>+</button>
        </div>
    )
}

export default Counter