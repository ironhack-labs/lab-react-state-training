import React from 'react';

const Random = ({ min, max }) => {
    const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;

    return (
        <div style={styles.container}>
            Random value between {min} and {max} =&gt; {randomValue}
        </div>
    );
};

const styles = {
    container: {
        border: '1px solid black',
        padding: '10px',
        margin: '10px 0',
        width: '400px',
        textAlign: 'center',
        fontSize: '18px',
    },
};

export default Random;
