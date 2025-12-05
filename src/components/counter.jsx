import { useState } from "react";

function Counter(){
  
  const [ number, setNumber ] = useState(0);
  const updateNumber = (operation) => {
    if (operation === "+") {
      setNumber(number + 1);
    }

    if (operation === "-") {
      if (number -1 <= 0){
        setNumber(0);
      } else {
        setNumber(number - 1);
      }
    }
  }
  return (
    <div className="d-flex align-items-center justify-content-center p-3 m-2 border border-primary">
      <button className="btn bg-primary text-light" onClick={() => updateNumber("-")} type="button">-</button>
      <div className="d-flex align-items-center justify-content-center ms-2 me-2">
        <p className="m-0">{number}</p>
      </div>
      <button className="btn bg-primary text-light" onClick={() => updateNumber("+")} type="button">+</button>
    </div>
  );
}

export default Counter;