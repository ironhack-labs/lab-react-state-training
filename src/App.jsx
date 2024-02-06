import "./App.css";
import LikeButton from "./components/LikeButton";
import Counter from "./components/Counter";
import ClickablePicture from "./components/ClickablePicture";

function App() {
  return (
    <div className="App">
      <h1>Likes:</h1>
    <LikeButton />
    <h1>Counter</h1>
    <Counter />
    <h1>Picture</h1>
    <ClickablePicture />
    </div>
  );
}

export default App;
