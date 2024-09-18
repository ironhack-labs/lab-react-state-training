import cubeEmptyPhoto from '../assets/images/dice-empty.png'
import threeDotsPhoto from '../assets/images/dice3.png'
import sixDotsPhoto from '../assets/images/dice6.png'
import '../App.css'
import { useState } from 'react'

export default function Dice() {
  const [currentCube, setCurrentCube] = useState('three');
  
  function renderTheCube () {
    setCurrentCube('empty')
    setTimeout(() => {
      setCurrentCube('six')
    },1000)
  }
  return (
    <div className="cube" onClick={renderTheCube}>
      {currentCube == 'three' && <img src={threeDotsPhoto} alt="" />}
      {currentCube == 'empty' && <img src={cubeEmptyPhoto} alt="" />}
      {currentCube == 'six' && <img src={sixDotsPhoto} alt="" />}
    </div>
  )
}
