import React from 'react';

const CityCard = ({ city }) => {
  const messageStyle = {
    textAlign: 'center',
    marginTop: '20px',
    fontSize: '18px',
    fontWeight: 'bold',

  };

  if (!city) return <p style={messageStyle}>Пожалуйста, выберите город.</p>;

  return (
    <div style={{ padding: '20px', marginTop: '10px', textAlign: 'center' }}>
      <h2>{city.name}</h2>
      <img src={city.imageUrl} alt={city.name} style={{ width: '50vw', height: '30vh' }} />
      <p>{city.description}</p>
      <h3>Интересные факты:</h3>
      <ul style={{ textAlign: 'left' }}>
        {city.facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
    </div>
  );
};

export default CityCard;
