import "./App.css";
import LikeButton from "./componets/LikeButton";
import Counter from "./componets/Counter";
import ClickablePicture from "./componets/ClickablePicture";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>

      <LikeButton />
      <br />
      <br />

      <br />
      <br />
      <Counter />

      < ClickablePicture/>
    </div>
  );
}

export default App;
