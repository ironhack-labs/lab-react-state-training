import React, {useState} from 'react'

export const Counter = () => {
    const [ count, setCount] = useState(0)
  return (
    <>
    <div>
        <button onClick={() => count>0 && setCount(count - 1)}>-</button>
            {count}
        <button onClick={() => setCount(count +1)}>+</button>
    </div>
    </>
  )
}
