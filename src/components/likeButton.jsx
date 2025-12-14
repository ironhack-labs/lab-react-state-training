import React, {useState} from 'react'; //para importar o Hook useState
function LikeButton() {
    //likes é a variavel do estado atual e setlikes é a funcao que eu uso para atualizar o estado.
    const [likes, setLikes] = useState(0);

    //funcao para aumentar o contador de likes

    const handleClick = () => {
        setLikes(likes + 1); //atualiza o estado
    }; 
    return (
        <button onClick={handleClick}>
            Like is {likes}
        </button>   
    );
}

export default LikeButton;