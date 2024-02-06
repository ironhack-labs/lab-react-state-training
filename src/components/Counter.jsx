import { useState } from 'react';//import the state function

function Counter() {
	const [count, setCount] = useState(0);//create a constant that has a variable and a function then set its value by calling the useState function and inside parenteses put the value that you want.

	return (//open and close empty html tags to indicate that this is the children tag
		<>
			<button onClick={()=>setCount(count + 1)}>+</button>
			<button onClick={()=> count>0 ? setCount(count - 1) : setCount(0)}>-</button>
			<p>You clicked {count} times</p>
		</>
	)//the function Onclick is a function that will be executed when the button is clicked, however, the function setCount is a function that can create eternal loop even though you put the event onclick, therefore ()=> we put a ghost fucntion to avoid that loop.
}

export default Counter;//export the function Counter






