import { useState } from "react"

export default function Counter() {
  const [num, setNum] = useState(0);

  function changeNum(int) {
    if(typeof int !== 'number' || num + int < 0) return;
    setNum(num + int);
  }

  return (
    <div className="counter-container">
      <button className="btn-counter" onClick={()=>{changeNum(-1)}}>-</button>
      <div>{num}</div>
      <button className="btn-counter" onClick={()=>{changeNum(1)}}>+</button>
    </div>
  )
}