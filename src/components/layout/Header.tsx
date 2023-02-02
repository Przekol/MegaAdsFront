import * as React from 'react';
import styles from './Header.module.css';
import { Button } from '../common/Button';
export const Header = () => (
  <header>
    <h1>
      <strong>Mega </strong>Ogłoszenia
    </h1>
    <Button>Dodaj ogłoszenie</Button>
    <div className={styles.search}>
      <input type="text" /> <Button>Szukaj</Button>
    </div>
  </header>
);
