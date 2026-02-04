import React, { useState } from 'react'
import LikeButton from './LikeButton'

function DiscoButton() {
    const colors = ["purple", "blue", "green", "yellow", "orange", "red"]
    const [selectedColor, setSelectedColor] = useState(colors[Math.floor(Math.random() * colors.length)])
  return (
    <div style={{backgroundColor: selectedColor, width: "100px"}} onClick={() => {
        setSelectedColor(colors[Math.floor(Math.random() * colors.length)])
    }}>
        <LikeButton >
            </LikeButton>
    </div>
  )
}

export default DiscoButton