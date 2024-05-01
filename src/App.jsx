import "./App.css";
import LikeButton from "./components/LikeButton";
import Counter from "./components/Counter"
import ClickablePicture from "./components/ClickablePicture";
import Dice from "./components/Dice";
import DiscoButton from "./components/DiscoButton";
import Carousel from "./components/Carousel";

function App() {
  return (
    <div className="App">
      <h3> LAB | React Training</h3>
      <h4>Activity 1 - LikeButton</h4>
      <LikeButton /> 
      <LikeButton />
      
      <h4>Activity 2 - Counter</h4>
      <Counter />

      <h4>Activity 3 - Clickable Picture</h4>
      <ClickablePicture />
      <h4>Activity 4 - Dice</h4>
      <Dice />
      <h4>Activity 5 - DiscoButton</h4>
      <DiscoButton />
      <DiscoButton />
      <h4>Activity 6 - Carousel</h4>
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
