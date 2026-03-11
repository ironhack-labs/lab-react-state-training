import { useState } from 'react'
import './DiscoButton.css'

function DiscoButton() {
    const styles = ['green', 'blue', 'yellow', 'purple', 'red']
    const [count, setcount] = useState(0)

    
    const color = styles[count % styles.length]

    function handleClick() {
        setcount(count + 1)
    }

    return (
        <button className={color} onClick={handleClick}>
            {count} Likes
        </button>
    )
}

export default DiscoButton