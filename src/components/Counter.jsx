const Counter = ({increment, likes, decrement}) => {
  return (
    <div className="counter">
        <button onClick={decrement}>-</button>
        <p>{likes}</p>
        <button onClick={increment}>+</button>
    </div>
  )
}

export default Counter