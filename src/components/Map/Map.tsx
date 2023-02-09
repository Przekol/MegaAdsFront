import * as React from 'react';
import styles from './Map.module.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import '../../utils/fix-map-icon';
import 'leaflet/dist/leaflet.css';
import { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../../context/search.context';
import { GetListOfAdsResponse } from 'types';
import { apiClient } from '../../servises/api';
import { SingleAd } from './SingleAd';

export const Map = () => {
  const { search } = useContext(SearchContext);
  const [ads, setAds] = useState<GetListOfAdsResponse>([]);

  useEffect(() => {
    (async () => {
      const result = await apiClient.get<GetListOfAdsResponse>(`/ad/search/${search}`);

      if (result.ok && result.data) {
        setAds(result.data);
      }
    })();
  }, [search]);

  return (
    <div className={styles.map}>
      <MapContainer className={styles.leafletContainer} center={[50.2657152, 18.9945008]} zoom={13}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href='https://www.openstreetmap.org/opyright'>OpenStreetMap</a> & contributors"
        />
        {ads.map((ad) => (
          <Marker key={ad.id} position={[ad.lat, ad.lon]}>
            <Popup>
              <SingleAd id={ad.id} />
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};
