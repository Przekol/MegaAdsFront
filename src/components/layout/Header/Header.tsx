import * as React from 'react';
import styles from './Header.module.css';
import { Button, Input } from '../../common/UI';

export const Header = () => (
  <header>
    <h1>
      <strong>Mega </strong>Ogłoszenia
    </h1>
    <Button>Dodaj ogłoszenie</Button>
    <div className={styles.search}>
      <Input type="text" /> <Button>Szukaj</Button>
    </div>
  </header>
);
