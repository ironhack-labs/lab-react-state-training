import Carousel from "./components/Carousel";
import Dice from "./components/Dice"
import ClickablePicture from "./components/ClickablePicture";
import Counter from "./components/Counter"
import LikeButton from "./components/LikeButton"
import "./App.css";



export default function App() {
  
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <div id="like-button">
        <LikeButton />        
        <LikeButton />

      </div>
      
      <div id="counter">
      <Counter />
      </div>
    
      <div id="cickable-picture">
      <ClickablePicture />
      </div>

      <div id="dice-picture">
      <Dice />
      </div>

      <div id="carousel">
      <Carousel
      images={[
        "https://randomuser.me/api/portraits/women/1.jpg",
        "https://randomuser.me/api/portraits/men/1.jpg",
        "https://randomuser.me/api/portraits/women/2.jpg",
        "https://randomuser.me/api/portraits/men/2.jpg"
      ]}
      />
      </div>
      

    </div>
  );
}
