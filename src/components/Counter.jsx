import React, { useState } from 'react'

function Counter() {
  const [counterNum, setCounterNum] = useState(0)

  const handleIncr = () =>(
    setCounterNum(counterNum + 1 )
  )
  const handelDecr = () =>(
    counterNum === 0 ? setCounterNum(0) : setCounterNum(counterNum - 1 )
  )



  return (
    <>
    <div>
      Counter : {counterNum}
    </div>
    <button onClick={handleIncr}>+</button>
    <button onClick={handelDecr}>-</button>
    </>
  )
}

export default Counter