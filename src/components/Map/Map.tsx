import * as React from 'react';
import styles from './Map.module.css';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import '../../utils/fix-map-icon';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import { GetListOfAdsResponse } from 'types';
import { searchAdResponse } from '../../services/api';
import { SingleAd } from './SingleAd';
import { MessageModal, Modal as AddFormModal } from '../common/UI/modals';
import { AddForm } from '../AddForm/AddForm';
import { useAddFromModal, useMessageModal, useSearch } from '../../context';

export const Map = () => {
  const { search } = useSearch();
  const { messageModal, closeMessageModal, openMessageModal } = useMessageModal();
  const { addFromModalIsOpen, closeAddFormModal } = useAddFromModal();

  const [ads, setAds] = useState<GetListOfAdsResponse>([]);
  const [id, setId] = useState<string>('');

  useEffect(() => {
    (async () => {
      const result = await searchAdResponse(search);

      if (result.ok && result.data) {
        setAds(result.data);
      } else {
        openMessageModal(result.error ? result.error : 'Wystąpił nieznany błąd', true);
      }
    })();
  }, [search, id]);

  return (
    <div className={styles.map}>
      <AddFormModal isOpen={addFromModalIsOpen} onRequestClose={closeAddFormModal}>
        <AddForm setId={setId} closeAddForm={closeAddFormModal} />
      </AddFormModal>
      <MessageModal
        isOpen={messageModal.isOpen}
        closeModal={closeMessageModal}
        message={messageModal.message}
        isErrorMessage={messageModal.isError}
      />
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
