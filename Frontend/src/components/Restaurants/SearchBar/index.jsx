import { useEffect, useState } from 'react';
import axios from 'axios';
import SSearchBar from './style';

export default function SearchBar() {
  const [searchCity, setSearchCity] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/restaurants?city=${searchCity}`)
      .then(({ data }) => {
        setResults(data);
        console.log(results);
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
      <ul>
        {results.map((result) => {
          return <li>{result.name}</li>;
        })}
      </ul>
    </SSearchBar>
  );
}
