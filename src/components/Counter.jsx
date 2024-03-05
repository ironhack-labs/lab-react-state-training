
const Counter = ({count, setCount}) => {
const addOne = () => {
    setCount(count+1);
}
const removeOne = () => {
    setCount(count-1)
}

  return (
    <div>
      <button onClick={removeOne}>-</button>
      {count}
      <button onClick={addOne}>+</button>
    </div>
  )
}

export default Counter
