import "./App.css";
import LikeButton from "./components/LikeButton";
import Counter from "./components/Counter";
import ClickablePicture from "./components/ClickablePicture";

function App() {
  return (
    <div className="App">
      <LikeButton />
      <Counter />
      <ClickablePicture />
    </div>
  );
}

export default App;
