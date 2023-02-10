import * as React from 'react';
import { useEffect, useState } from 'react';
import { GetOneAdResponse } from 'types';
import { getOneAdResponse } from '../../services/api';

interface Props {
  id: string;
}
export const SingleAd = (props: Props) => {
  const [ad, setAd] = useState<GetOneAdResponse | null>(null);
  useEffect(() => {
    (async () => {
      const result = await getOneAdResponse(props.id);

      if (result.ok && result.data) {
        setAd(result.data);
      } else {
        console.log(result.error ? result.error : 'Wystąpił nieznany błąd');
      }
    })();
  }, []);
  if (ad === null) {
    return <p>Wczytywanie</p>;
  }

  return (
    <>
      <h2>{ad.name}</h2>
      <p>{ad.description}</p>
      {!!ad.price && (
        <p>
          <strong>{ad.price} zł</strong>
        </p>
      )}
      <hr />
      <a href={ad.url} target="_blank" rel="noreferrer">
        Otwórz ogłoszenie
      </a>
    </>
  );
};
