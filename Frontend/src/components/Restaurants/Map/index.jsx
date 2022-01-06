import { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import SMap from './style';

export default function Map({ city }) {
  const [markers, setMarkers] = useState([]);
  const [results, setResults] = useState([]);
  const [cityCoords, setCityCoords] = useState([]);
  const [isUpdate, setIsupdate] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/restaurants?city=${city}`)

      .then(({ data }) => {
        setResults(data);
        setIsupdate(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [city]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/cities/${city}`)
      .then(({ data }) => {
        setCityCoords([parseFloat(data[0].lat), parseFloat(data[0].lon)]);
        setIsupdate(true);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [results]);

  useEffect(() => {
    const array = results.map((result) => {
      return (
        <Marker
          key={[result.lat, result.lon]}
          position={[result.lat, result.lon]}
        />
      );
    });
    setMarkers(array);
  }, [results]);

  return (
    <SMap>
      {isUpdate && (
        <>
          <MapContainer
            preferCanvas
            center={cityCoords}
            zoom={13}
            scrollWheelZoom
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <MarkerClusterGroup chunkedLoading>{markers}</MarkerClusterGroup>
          </MapContainer>
        </>
      )}
    </SMap>
  );
}

Map.propTypes = {
  city: PropTypes.string,
};
Map.defaultProps = {
  city: '',
};
