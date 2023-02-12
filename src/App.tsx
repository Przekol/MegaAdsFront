import React from 'react';
import styles from './App.module.css';

import { Header } from './components/layout';
import { Map } from './components/Map';

import { Outlet } from 'react-router-dom';
import { AddFromModalContextProvider, MessageModalContextProvider, SearchContextProvider } from './context';

export function App() {
  return (
    <>
      <MessageModalContextProvider>
        <SearchContextProvider>
          <AddFromModalContextProvider>
            <div className={styles.wrapper}>
              <Header />
              <div id="detail">
                <Outlet />
              </div>
              <Map />
            </div>
          </AddFromModalContextProvider>
        </SearchContextProvider>
      </MessageModalContextProvider>
    </>
  );
}
