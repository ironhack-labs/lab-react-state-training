import React, { useState } from 'react'

function Carousel(props) {
    const [selectedIndex, setSelectedIndex] = useState(Math.floor(Math.random() * props.images.length))
  return (
    <div style={{display:"flex", alignItems: "end"}}>
        <button onClick={() => { setSelectedIndex((previousSelectedIndex) => {
            return previousSelectedIndex == 0 ? props.images.length - 1 : previousSelectedIndex - 1
            })
        }}>Left</button>
        <img src={props.images[selectedIndex]} alt="" />
        <button onClick={() => { setSelectedIndex((previousSelectedIndex) => {
            return previousSelectedIndex == props.images.length - 1 ? 0 : previousSelectedIndex + 1
            })
        }}>Right</button>
    </div>
  )
}

export default Carousel