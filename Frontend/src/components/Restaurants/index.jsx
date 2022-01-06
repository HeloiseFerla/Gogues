import { useState } from 'react';
import Map from './Map';
import SearchBar from './SearchBar';
import SRestaurants from './style';
import Pagination from './Pagination';

export default function Restaurants() {
  const [city, setCity] = useState('Lille');

  return (
    <SRestaurants>
      <h2>Restaurants</h2>
      <div className="search">
        <h3>Recherche un restaurant :</h3>
        <h4>Par ville</h4>
        <SearchBar city={city} setCity={setCity} />
      </div>
      <div className="map">
        <Map city={city} />
      </div>
      <Pagination city={city} />
    </SRestaurants>
  );
}
