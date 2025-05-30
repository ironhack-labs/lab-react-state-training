import { useState } from "react"

function getRandomColor() {
  return Math.floor(Math.random() * 251);
}

function DiscoButton({ initialCount = 0, r = 0, g = 0, b = 0 }) {
  const [state, setState] = useState({ 
    count: initialCount, 
    color: `rgb(${r}, ${g}, ${b})` 
  });
  
  const handleSetState = () => {
    r = getRandomColor();
    g = getRandomColor();
    b= getRandomColor();
    
    setState({
      count: count + 1,
      color: `rgb(${r}, ${g}, ${b})`
    });
  }

  const { color, count } = state
  return (
    <button 
      type="button"
      style={{
        backgroundColor: color
      }} 
      className="btn btn-outline-dark" 
      onClick={handleSetState}
    >{count}Likes</button>
  )
}

export default DiscoButton;