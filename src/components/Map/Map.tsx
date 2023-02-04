import * as React from 'react';
import styles from './Map.module.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import '../../utils/fix-map-icon';
import 'leaflet/dist/leaflet.css';

export const Map = () => {
  return (
    <div className={styles.map}>
      <MapContainer className={styles.leafletContainer} center={[50.2657152, 18.9945008]} zoom={13}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href='https://www.openstreetmap.org/opyright'>OpenStreetMap</a> & contributors"
        />
        <Marker position={[50.2657152, 18.9945008]}>
          <Popup>
            <h2>IT.focus</h2>
            <p>Super Firma programistyczna</p>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};
