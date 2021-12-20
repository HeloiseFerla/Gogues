import PropTypes from 'prop-types';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import SMap from './style';

export default function Map({ results, averageLon, averageLat }) {
  return (
    <SMap>
      <MapContainer
        preferCanvas
        center={[averageLat, averageLon]}
        zoom={15}
        scrollWheelZoom
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerClusterGroup
          showCoverageOnHover={false}
          zoomToBoundsOnClick={false}
          removeOutsideVisibleBounds
        >
          {results.map((result) => {
            return <Marker position={[result.lat, result.lon]} />;
          })}
        </MarkerClusterGroup>
      </MapContainer>
    </SMap>
  );
}

Map.propTypes = {
  results: PropTypes.arrayOf,
  averageLat: PropTypes.number,
  averageLon: PropTypes.number,
};
Map.defaultProps = {
  results: [],
  averageLat: 0,
  averageLon: 0,
};
