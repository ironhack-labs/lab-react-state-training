import "./App.css";
import { Carousel } from "./components/Carousel";
import { ClickablePicture } from "./components/clickablePicture";
import { Counter } from "./components/Counter";
import { Dice } from "./components/Dice";
import { DiscoButton } from "./components/DiscoButton";
import { LikeButton } from "./components/LikeButton";


function App() {
 function randomNumber()
     {
        return Math.floor(Math.random() * 5) + 1
     }
  return (
    <div className=" app">
      <h1> LAB | React Training</h1> 
      <LikeButton />
      <Counter />
      <ClickablePicture/>
      <Dice randomNumber = {randomNumber}/>
      <DiscoButton randomNumber = {randomNumber}/>
      <Carousel
  images={[
    "https://randomuser.me/api/portraits/women/1.jpg",
    "https://randomuser.me/api/portraits/men/1.jpg",
    "https://randomuser.me/api/portraits/women/2.jpg",
    "https://randomuser.me/api/portraits/men/2.jpg"
  ]}
/>
    </div>

  ); 
}

export default App;
