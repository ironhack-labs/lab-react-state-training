import "./App.css";
import Counter from "./components/Counter";
import LikeButton from "./components/LikeButton";
import ClickablePicture from "./components/ClickablePicture";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <div className="like-buttons">
        <LikeButton />
        <LikeButton />
      </div>
      <div className="counter">
        <Counter />
      </div>
      <div className="clickable-picture">
        <ClickablePicture />
      </div>
    </div>
  );
}

export default App;
