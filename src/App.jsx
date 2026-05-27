import "./App.css";
import LikeButton from "./components/LikeButton";
import IncDecCounter from "./components/IncDecCounter";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <LikeButton />
      <LikeButton />
      <IncDecCounter />
    </div>
  );
}

export default App;
