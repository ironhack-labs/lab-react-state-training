
// Importamos los componentes que creamos
import "./App.css";
import LikeButton from "./components/LikeButton";
import Counter from "./components/Counter";
import ClickablePicture from "./components/ClickablePicture";
import Dice from "./components/Dice";

function App() {
  // Aquí mostramos los componentes en pantalla
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      {/* Botón de likes */}
      <LikeButton />
      {/* Contador con + y - */}
      <Counter />
      {/* Imagen que cambia al hacer clic */}
      <ClickablePicture />
      {/* Dado que cambia al hacer clic */}
      <Dice />
    </div>
  );
}

export default App;
