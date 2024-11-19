import "./App.css";
import ClickablePicture from "./components/ClickablePicture";
import Counter from "./components/Counter";
import LikeButton from "./components/likeButton";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <LikeButton />
      <LikeButton />
      <br />
      <Counter />
      <br />
      <ClickablePicture />
      <br />
    </div>
  );
}

export default App;
