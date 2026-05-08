import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)


  return (

    //{count > 0 ? count -1 : 0 } => (
    <div>
    <button onClick={() => setCount(Math.max(0, count -1))}> - </button> 
    <span>{count}</span>
    <button onClick={() => setCount(count +1)}> + </button> 
    </div>
  )//) 
}
