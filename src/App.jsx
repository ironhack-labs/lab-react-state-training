import "./App.css";
import LikeButton from './components/LikeButton.jsx'
import Counter from "./components/Counter.jsx";
import ClickablePicture from "./components/ClickablePicture.jsx";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <LikeButton/>
      <LikeButton/>
      <Counter />
      <ClickablePicture />
    </div>
  );
}

export default App;
