import React, { useState } from 'react';
import styles from './App.module.css';

import { Header } from './components/layout';
import { Map } from './components/Map';
import { SearchContext } from './context/search.context';
import { Outlet } from 'react-router-dom';

export function App() {
  const [search, setSearch] = useState('');
  return (
    <>
      <SearchContext.Provider value={{ search, setSearch }}>
        <div className={styles.wrapper}>
          <Header />
          <div id="detail">
            <Outlet />
          </div>
          <Map />
        </div>
      </SearchContext.Provider>
    </>
  );
}
