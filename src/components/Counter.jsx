
const Counter = ({counter, setCounterState}) => {
    const handleIncrement = () => {
        setCounterState(Count => Count + 1)
        
    }
    const handleDecrement = () => {
        setCounterState(prevCount => {
            if (prevCount === 0) {
                return prevCount;
            }else {
                return prevCount -1;
            }
        } 
            ) 
    }

   
  return (
    <>
    <div className="Counter" >
       counter: {counter}      
    </div >
    <div className="Counter">
    <button onClick={handleIncrement}>+</button>
    <button onClick={handleDecrement}>-</button>
    </div>
   
    </>
  )
}
export default Counter;





