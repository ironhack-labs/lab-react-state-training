export const Counter = ({initValue, incrValue, decrValue}) => {      
  return <div className="counter">
    <button onClick={decrValue}>-</button>
    <p>{initValue}</p>
    <button onClick={incrValue}>+</button>
  </div>;
};
