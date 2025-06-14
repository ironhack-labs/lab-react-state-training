export default function Counter({ count = 0, setCount }) {
  const handleDecrement = () => {
    count > 0 ? setCount(count - 1) : null;
  };

  return (
    <>
      <hr />
      <div className="counter-container">
        <button onClick={handleDecrement}>-</button>
        <h2>{count}</h2>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </>
  );
}
