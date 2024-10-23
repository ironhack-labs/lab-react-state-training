import LikeButton from "./components/LikeButton";
import Counter from "./components/Counter";
import ClickablePicture from "./ClickablePicture";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <LikeButton />
      <Counter />
      <ClickablePicture />
    </div>
  );
}

export default App;
