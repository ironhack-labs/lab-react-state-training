import { useState } from 'react';
export default function Counter() {
    const [count, setCount] = useState(0);
    return(
        <div>
            {count > 0 ? <button onClick={() => setCount(count - 1)}> - </button> :  <button> - </button> }

{count}
<button onClick={() => setCount(count + 1)}> + </button>
        </div>
    )
}