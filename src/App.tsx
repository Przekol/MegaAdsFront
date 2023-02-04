import React from 'react';
import styles from './App.module.css';

import { Header } from './components/layout';
import { Map } from './components/Map';

export function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Map />
    </div>
  );
}
