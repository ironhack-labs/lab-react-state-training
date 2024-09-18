import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  const handleAdd = () => {
    setCount(count + 1)
  }
  const handleRemove = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }
  return (
    <div
      style={{
        margin: '20',
        border: '1px solid blue',
        width: '200px',
        padding: '10px',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <h2
          onClick={handleRemove}
          style={{
            width: '40px',
            height: '40px',
            backgroundColor: 'blue',
            color: 'white',
            textAlign: 'center',
          }}
        >
          -
        </h2>
        <h1>{count}</h1>
        <h2
          onClick={handleAdd}
          style={{
            width: '40px',
            height: '40px',
            backgroundColor: 'blue',
            color: 'white',
            textAlign: 'center',
          }}
        >
          +
        </h2>
      </div>
    </div>
  )
}

export default Counter
