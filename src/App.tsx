import React, { useState } from 'react';
import styles from './App.module.css';

import { Header } from './components/layout';
import { Map } from './components/Map';
import { SearchContext } from './context/search.context';

export function App() {
  const [search, setSearch] = useState('');
  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      <div className={styles.wrapper}>
        <Header />
        <Map />
      </div>
    </SearchContext.Provider>
  );
}
