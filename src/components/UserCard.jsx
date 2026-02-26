import React from 'react';

function UserCard({ name, image, email }) {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: 8, padding: 16, textAlign: 'center', width: 200, margin: '1rem auto' }}>
      <img src={image} alt={name} style={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover' }} />
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
}

export default UserCard;
