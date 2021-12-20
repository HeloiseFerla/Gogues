import { useState } from 'react';
import Map from './Map';
import SearchBar from './SearchBar';
import SRestaurants from './style';

export default function Restaurants() {
  const [results, setResults] = useState([]);
  const [averageLat, setAverageLat] = useState(48.856614);
  const [averageLon, setAverageLon] = useState(2.3522219);
  return (
    <SRestaurants>
      <h2>Restaurants</h2>
      <div className="search">
        <h3>Recherche un restaurant :</h3>
        <h4>Par ville</h4>
        <SearchBar
          setResults={setResults}
          setAverageLat={setAverageLat}
          setAverageLon={setAverageLon}
        />
      </div>
      <div className="map">
        <Map
          results={results}
          averageLat={averageLat}
          averageLon={averageLon}
        />
      </div>
    </SRestaurants>
  );
}
