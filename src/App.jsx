import LikeButton from "./components/LikeButton";
import Counter from "./components/Counter"
import "./App.css";
import ClickablePicture from "./components/ClickablePicture";


function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <LikeButton /> <LikeButton />
      <Counter />
      <ClickablePicture />
    </div>
  )
}

export default App;
