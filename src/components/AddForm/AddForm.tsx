import * as React from 'react';
import styles from './AddForm.module.css';
import { Button, Input } from '../common/UI';
import { FormEvent, useState } from 'react';
import { addAdResponse, geocodingResponse } from '../../services/api';

export const AddForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [form, setForm] = useState({
    name: '',
    description: '',
    price: 0,
    url: '',
    address: '',
  });
  const [id, setId] = useState<string>('');

  const saveAd = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    try {
      const resultGeocoding = await geocodingResponse(form.address);
      if (resultGeocoding.ok && resultGeocoding.data) {
        const { lat, lon } = resultGeocoding.data;
        const result = await addAdResponse({ ...form, lat, lon });

        if (result.ok && result.data) {
          setId(result.data.id);
        } else {
          console.log(result.error ? result.error : 'Wystąpił nieznany błąd');
        }
      } else {
        console.log(resultGeocoding.error ? resultGeocoding.error : 'Wystąpił nieznany błąd');
      }
    } finally {
      setLoading(false);
    }
  };
  const updateForm = (key: string, value: string | number) => {
    setForm((form) => ({
      ...form,
      [key]: value,
    }));
  };

  if (loading) {
    return <h2>Trwa dodawanie ogłoszenia...</h2>;
  }
  if (id) {
    return (
      <div>
        <h2>
          Twoje ogłoszenie {form.name} zostało poprawnie dodane do serwisu pod ID: {id}
        </h2>
        <Button to="/">Powrót na stronę główną</Button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <form className={styles.addForm} onSubmit={saveAd}>
        <h1>Dodawanie ogłoszenia</h1>
        <div className={styles.formBox}>
          <label className={styles.label} htmlFor="name">
            Nazwa:
          </label>
          <Input
            className={styles.input}
            name="name"
            id="name"
            required
            maxLength={100}
            value={form.name}
            onChange={(e) => updateForm('name', e.target.value)}
          />
        </div>
        <div className={styles.formBox}>
          <label className={styles.label} htmlFor="description">
            Opis:
          </label>
          <textarea
            className={styles.textarea}
            name="description"
            id="description"
            maxLength={1000}
            value={form.description}
            onChange={(e) => updateForm('description', e.target.value)}
          ></textarea>
        </div>
        <div className={styles.formBox}>
          <label className={styles.label} htmlFor="price">
            Cena:
          </label>
          <Input
            className={styles.input}
            type="number"
            name="price"
            id="price"
            maxLength={999999}
            value={form.price}
            onChange={(e) => updateForm('price', Number(e.target.value))}
          />
          <small>Pozostaw zero w polu, aby nie wyświetlać ceny.</small>
        </div>
        <div className={styles.formBox}>
          <label className={styles.label} htmlFor="url">
            Adres URL:
          </label>
          <Input
            className={styles.input}
            type="url"
            name="url"
            id="url"
            maxLength={100}
            value={form.url}
            onChange={(e) => updateForm('url', e.target.value)}
          />
        </div>
        <div className={styles.formBox}>
          <label className={styles.label} htmlFor="address">
            Adres fizyczny na mapie:
          </label>
          <Input
            className={styles.input}
            name="address"
            id="address"
            maxLength={100}
            value={form.address}
            onChange={(e) => updateForm('address', e.target.value)}
          />
        </div>
        <Button type="submit">Zapisz</Button>
      </form>
    </div>
  );
};
