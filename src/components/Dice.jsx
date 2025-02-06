import { useState, useEffect } from "react";
import dadoVacio from "../assets/images/dice-empty.png";
import dado1 from "../assets/images/dice1.png";
import dado2 from "../assets/images/dice2.png";
import dado3 from "../assets/images/dice3.png";
import dado4 from "../assets/images/dice4.png";
import dado5 from "../assets/images/dice5.png";
import dado6 from "../assets/images/dice6.png";

export default function Dice() {
  const dados = [dado1, dado2, dado3, dado4, dado5, dado6];
  const [image, setImage] = useState(dadoVacio);

  const muestrImage = () => {
    setImage(dadoVacio);
    setTimeout(() => {
      const imgAleatoria = Math.floor(Math.random() * dados.length);
      setImage(dados[imgAleatoria]);
      console.log(imgAleatoria);
    }, 1000);
  };

  const iniciaDado = () => {
    const imgAleatoria1 = Math.floor(Math.random() * dados.length);
    setImage(dados[imgAleatoria1]);
  };

  useEffect(() => {
    iniciaDado();
  }, []);

  return <img onClick={muestrImage} src={image} alt="dados" />;
}