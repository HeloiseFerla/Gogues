import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import SSearchBar from './style';

export default function SearchBar({
  setResults,
  setAverageLat,
  setAverageLon,
}) {
  const [searchCity, setSearchCity] = useState('Paris');

  const average = (array, key) => {
    let sum = 0;
    if (key === 'lat') {
      sum = array.reduce((previousValue, currentValue) => {
        return previousValue.lat + currentValue.lat;
      });
    } else {
      sum = array.reduce((previousValue, currentValue) => {
        return previousValue.lon + currentValue.lon;
      });
    }
    return sum / array.length;
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5000/restaurants?city=${searchCity}`)
      .then(({ data }) => {
        setResults(data);
        setAverageLat(average(data, 'lat'));
        setAverageLon(average(data, 'lon'));
      })
      .catch((e) => {
        console.log(e);
      });
  }, [searchCity]);

  const handleCityChange = (e) => {
    setSearchCity(e.target.value);
  };
  return (
    <SSearchBar>
      <input
        type="search"
        value={searchCity}
        onChange={handleCityChange}
        placeholder="Paris"
      />
    </SSearchBar>
  );
}
SearchBar.propTypes = {
  setResults: PropTypes.func,
  setAverageLat: PropTypes.func,
  setAverageLon: PropTypes.func,
};
SearchBar.defaultProps = {
  setResults: () => {},
  setAverageLat: () => {},
  setAverageLon: () => {},
};
