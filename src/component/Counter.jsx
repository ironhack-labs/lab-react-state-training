import {useState} from "react"

function Counter () {
    
    const [count3 , setCount3] = useState(0) ;
        
    return (

        <section>

            <button class="blueButton" onClick = {() => setCount3(count3 + 1)}> + </button>

            {count3}

            <button class="blueButton" onClick = {() => count3>0 ? setCount3(count3 - 1) : setCount3(0)}> - </button>

        </section>

        

    )
}

export default Counter ;