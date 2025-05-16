import { useState } from "react";

function LikeButton() {
  const [counterValue, setcounterValue] = useState(0);

  const handlebtnlike = () => {
    setcounterValue(counterValue + 1);
  };

  return (
    <div>
      <button onClick={handlebtnlike}> {counterValue} likes </button>
    </div>
  );
}

export default LikeButton;

/* const [ something,setSomething] = useState(someValue)

something = my state
setSomething = function to update state
SomeValue = initial value of state (optional) */

/* useState(0) : Initialise l'état avec une valeur de 0.


const [valeur, setValeur] : valeur est l'état et setValeur est la fonction pour le modifier.


onClick={() => setValeur(valeur + 1)} : Modifie l'état en l'incrémentant de 1 lorsque le bouton est cliqué. */
