import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import SMap from './style';
import restaurants from '../../../db';

export default function Map() {
  return (
    <SMap>
      <MapContainer
        center={restaurants[0].geoCoord}
        zoom={20}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={restaurants[0].geoCoord}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </SMap>
  );
}
