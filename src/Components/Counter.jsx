function Counter(props) {
  const handleSumar = () => {
    props.setButtonValue(props.buttonValue + 1);
  };

  const handleRestar = () => {
    
    {props.buttonValue > 0 ? props.setButtonValue(props.buttonValue - 1) :  0}

  };

  return (
    <div>
      <button onClick={handleRestar}>-</button>
      <button>{props.buttonValue} </button>
      <button onClick={handleSumar}>+</button>
    </div>
  );
}

export default Counter;
