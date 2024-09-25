import React from 'react';

const CitySelector = ({ cities, onSelectCity }) => {
  return (
    <div>
      <select onChange={(e) => onSelectCity(e.target.value)}>
        <option value="">Выберите город</option>
        {cities.map((city) => (
          <option key={city.name} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CitySelector;