import "./App.css";
import Counter from "./components/Counter";
import LikeButton from "./components/LikeButton";
import ClickablePicture from "./components/ClickablePicture";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <div className="LikeButton">
      <LikeButton />
      <LikeButton />
      </div>
      <Counter />
      <ClickablePicture />
    </div>
  );
}

export default App;
