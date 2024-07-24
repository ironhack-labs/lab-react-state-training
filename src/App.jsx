import "./App.css";
import LikeButton from "./components/LikeButton/LikeButton";
import Counter from "./components/Counter/Counter";
import ClickablePicture from "./components/ClickablePicture/ClickablePicture";
function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <hr />
      <br />
      <LikeButton />
      <br />
      <hr />
      <Counter />
      <br />
      <hr />
      <ClickablePicture />

    </div>
  );
}

export default App;
