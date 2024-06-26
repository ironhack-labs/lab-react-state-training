import React, {useState} from 'react';

const LikeButton = () => {
    const [likes, setLikes] = useState(0); //likes buton tıklama sayısını tutan değişken, setLikes değişkenin değerini güncellemek için kullanılır
    const handleClick = () => {
        setLikes(likes +1);
    };
    return (
        <button onClick={handleClick}>
        {likes} likes
        </button>
    );
};
export default LikeButton;