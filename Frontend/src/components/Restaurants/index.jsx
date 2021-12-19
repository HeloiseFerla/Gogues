import Map from './Map';
import SearchBar from './SearchBar';
import SRestaurants from './style';

export default function Restaurants() {
  return (
    <SRestaurants>
      <h2>Restaurants</h2>
      <div className="search">
        <h3>Recherche un restaurant :</h3>
        <h4>Par ville</h4>
        <SearchBar />
      </div>
      <div className="map">
        <Map />
      </div>
    </SRestaurants>
  );
}
