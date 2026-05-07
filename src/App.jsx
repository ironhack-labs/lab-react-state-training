import "./App.css";
import LikeButton from './Components/LikeButton.jsx'
import Counter from './Components/Counter.jsx'
import ClickablePicture from './Components/ClickablePicture.jsx'
import Dice from './Components/Dice.jsx'
import { useState } from 'react'
import Carousel from './Components/Carousel.jsx'
import DiscoButton from './Components/DiscoButton.jsx'

function App() {

  const [images, setImages] = useState([
    "https://randomuser.me/api/portraits/women/1.jpg",
    "https://randomuser.me/api/portraits/men/1.jpg",
    "https://randomuser.me/api/portraits/women/2.jpg",
    "https://randomuser.me/api/portraits/men/2.jpg"
  ]);

  return (
    <div className="App">
      <LikeButton/>
      <Counter/>
      <ClickablePicture/>
      <Dice/>
      <DiscoButton/>
      <Carousel image={images}/>
    </div>
  );
}

export default App;
