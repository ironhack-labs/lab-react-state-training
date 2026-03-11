import {useState} from 'react'

function Counter()  {

    const [count, setcount] = useState(0)

    function modifyCount (value) {
        if (count + value === -1) return
        setcount(count + value)
    }

  const styles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '16px',
    margin: '20px 40px',
    padding: '8px 16px',
    width: 'fit-content',
    minWidth: '100px',
    height: '50px',
    borderRadius: '12px',
    border: '1px solid #eaeaea'
};

    const buttonStyle = {
        height: '20px'
    }

  return (
    <div style={styles}>
        <button style={buttonStyle} onClick={() => {modifyCount(-1)}}>-</button>
        <p>{count}</p>
        <button style={buttonStyle} onClick={() => {modifyCount(+1)}}>+</button>
    </div>
  )
}

export default Counter
