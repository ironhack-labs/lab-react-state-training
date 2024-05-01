import { useState } from 'react'
import LikeButton1 from './components/LikeButton1'
import Counter from './components/Counter'
import ClickablePicture from './components/ClickablePicture'
import './App.css'

function App() {
  

  return (
    <div id="btn1">
      <LikeButton1 /> <LikeButton1 />
   
    <div id="btn2"> <Counter /> </div> 
    <br />
    <div id="picture">  <ClickablePicture  />    </div>
    </div>
    
  )
}

export default App
