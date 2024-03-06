const Counter = ({ counter, setCounter }) => {
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
  return (
    <div className="container">
      <button onClick={increment}> + </button>
      {counter}
      <button onClick={decrement}> - </button>
    </div>
  );
};

export default Counter;
