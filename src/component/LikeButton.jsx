import {useState} from "react"

function LikeButton () {
    
    const [count , setCount] = useState(0) ;
    const [count2 , setCount2] = useState(0) ;
    
    return (

        <section>

            <button onClick = {() => setCount(count + 1)}> {count} like </button>

            <button onClick = {() => setCount2(count2 + 1)}> {count2} like </button>

        </section>

        

    )
}

export default LikeButton ;