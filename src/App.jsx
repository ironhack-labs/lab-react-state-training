import "./App.css";
import ClickablePicture from "./components/ClickablePicture";
import Counter from "./components/Counter";
import LikeButton from "./components/LikeButton";


function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>

      <div className="like-buttons-container">
        <LikeButton />
        <LikeButton />
      </div>

      <Counter />

      <ClickablePicture />

    </div>
  );
}

export default App;
