import "./App.css"
import LikeButton from "./components/LikeButton/LikeButton"
import Counter from "./components/Counter/Counter"
import ClickablePicture from "./components/ClickablePicture/ClickablePicture"
import Dice from "./components/Dice/Dice"

function App() {
  return (
    <div className="App">

      <h1> LAB | React Training</h1>

      <h2>Iteration 1</h2>
      <LikeButton></LikeButton>

      <hr />

      <h2>Iteration 2</h2>
      <Counter></Counter>

      <hr />

      <h2>Iteration 3</h2>
      <ClickablePicture></ClickablePicture>

      <hr />

      <h2>Iteration 4</h2>
      <Dice></Dice>

    </div>
  )
}

export default App
