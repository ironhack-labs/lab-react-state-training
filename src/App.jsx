import "./App.css";
import Carousel from "./components/Carousel.jsx";
import ClickablePicture from "./components/ClickablePicture.jsx";
import Counter from "./components/Counter.jsx";
import Dice from "./components/Dice.jsx";
import DiscoButton from "./components/DiscoButton.jsx";
import LikeButton from "./components/LikeButton.jsx";

function App() {
  return (
    <div className="App">
      <h1>LAB | React Training</h1>
      
      <p>Iteration 1</p>
      <div style={{ display: "flex", gap: "10px" }}>
        <LikeButton /> 
        <LikeButton />
      </div>
      
      <p>Iteration 2</p>
      <Counter />
      
      <p>Iteration 3</p>
      <ClickablePicture />

      <p>Iteration 4</p>
      <Dice />
      
      <p>Iteration 5</p>
      <DiscoButton /> 

      <p>Iteration 6</p>
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
