import { useState } from "react";

function Clickable({ className = "" }) {
  const listaImagenes = [
    "/src/assets/images/maxence.png",
    "/src/assets/images/maxence-glasses.png",
  ];
  const [currentImage, setCurrentImagen] = useState(0);
  const handleImg = () => {
    setCurrentImagen((prevIndex) => (prevIndex + 1) % listaImagenes.length);
  };
  return <img src={listaImagenes[currentImage]} alt="" onClick={handleImg} />;
}
export default Clickable;

// function ClickablePicture({ className = "" }) {
//   const [stateImg, setStateImg] = useState(true);

//   const handleImg = (e) => {
//     // Cambiar la imagen solo si stateImg es true
//     if (stateImg) {
//         e.target.src= "/src/assets/images/maxence.png";
//       e.target.src = "/src/assets/images/maxence-glasses.png";
//       setStateImg(false); // Cambiar el estado para que no cambie la imagen otra vez
//     } else {
//       e.target.src = "/src/assets/images/maxence.png";
//       setStateImg(true); // Volver a cambiar el estado para permitir el cambio de imagen de nuevo
//     }
//   };

//   return (
//     <img
//       style={{ cursor: "pointer" }}
//       src="/src/assets/images/maxence.png"
//       alt="Clickable"
//       onClick={handleImg}
//       className={className}
//     />
//   );
// }

// export default ClickablePicture;

// import { useState } from "react";

// function ClickablePicture({ className = "" }) {
//   const [stateImg, setStateImg] = useState("/src/assets/images/maxence.png");

//   const handleImg = () => {

//     if (stateImg==="/src/assets/images/maxence.png") {
//         setStateImg  ( "/src/assets/images/maxence-glasses.png");

//     } else {
//        setStateImg("/src/assets/images/maxence.png") ;

//     }
//   };

//   return (
//     <img
//       style={{ cursor: "pointer" }}
//       src={stateImg}
//       alt="Clickable"
//       onClick={handleImg}
//       className={className}
//     />
//   );
// }

// export default ClickablePicture;
