import * as React from 'react';
import styles from './Map.module.css';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export const Map = () => {
  return (
    <div className={styles.map}>
      <MapContainer className={styles.leafletContainer} center={[50.2657152, 18.9945008]} zoom={13}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href='https://www.openstreetmap.org/opyright'>OpenStreetMap</a> & contributors"
        />
      </MapContainer>
    </div>
  );
};
