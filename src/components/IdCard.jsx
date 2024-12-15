import React from 'react';

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
    return (
        <div style={styles.card}>
            <img src={picture} alt={`${firstName} ${lastName}`} style={styles.image} />
            <div style={styles.info}>
                <p><strong>First name:</strong> {firstName}</p>
                <p><strong>Last name:</strong> {lastName}</p>
                <p><strong>Gender:</strong> {gender}</p>
                <p><strong>Height:</strong> {(height / 100).toFixed(2)}m</p>
                <p><strong>Birth:</strong> {birth.toDateString()}</p>
            </div>
        </div>
    );
};

const styles = {
    card: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        border: '1px solid black',
        borderRadius: '3px',
        padding: 'px',
        margin: '10px 0',
        width: '800px',
    },
    image: {
        width: '100px',
        height: '100px',
        objectFit: 'cover',
        marginRight: '10px',
        alignSelf: 'flex-start',
    },
    info: {
        textAlign: 'left',
        lineHeight: '0.5',
    },
};

export default IdCard;
