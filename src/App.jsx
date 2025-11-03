import "./App.css";
import LikeButton from "./Components.jsx/LikeButton";
import ClickablePicture from "./Components.jsx/ClickablePicture";
import Counter from "./Components.jsx/Counter";
import Dice from "./Components.jsx/Dice";
import DiscoButton from "./assets/DiscoButton";
import Carousel from "./Components.jsx/Carousel";
function App() {
  return (
    
    
    <div>
      <h1> LAB | React Training</h1>
      <div className="theseButtons">
      <LikeButton className="first-button"/>
      <LikeButton className="second-button"/>
      </div>
      <div className="app-container">
      <h1>Counter Log</h1>
      <Counter />
      </div>
      <div className="clickable-picture-container">
        <h1> Click this picture</h1>
        <ClickablePicture />
      </div>
      <div>
        <h1> Dice Rolley</h1>
        <Dice />
      </div>
      <h1> The disco is here</h1>
      <DiscoButton />
      <DiscoButton />

      <Carousel />

      </div>
    
  );
}

export default App;
