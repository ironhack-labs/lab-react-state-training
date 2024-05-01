import { useState } from 'react'
 

function Counter() {
    const counterPlus = () => {
        setCount  (count+1)
    }
    
    
        const counterMinus = () => {
            if (count <= 0){
                return 
            }
            setCount  (count-1)
        }   
    


    const[count,setCount] = useState(() => 0)

  return (
    <>
      <div>
        <h2>Counter</h2>
        <div className='counter'>
        <p> { count } </p>
         
        <button onClick={counterMinus}> - </button>

        <button onClick={counterPlus}> + </button>
        </div>
      </div>
    </>
  )
}

export default Counter