import "./App.css";
import LikeButton from "./components/LikeButton";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>

      <LikeButton />
      <LikeButton />
      <ClickablePicture />
      <Counter />
    </div>
  );
}

export default App;
