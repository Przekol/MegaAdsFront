import * as React from 'react';
import styles from './Header.module.css';
import { Button, Input } from '../../common/UI';
import { FormEvent, useContext, useState } from 'react';
import { SearchContext } from '../../../context/search.context';

export const Header = () => {
  const { search, setSearch } = useContext(SearchContext);
  const [inputVal, setInputValue] = useState(search);

  const setSearchFromLocalState = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch(inputVal);
  };

  return (
    <header>
      <h1>
        <strong>Mega </strong>Ogłoszenia
      </h1>
      <Button>Dodaj ogłoszenie</Button>
      <form className={styles.search} onSubmit={setSearchFromLocalState}>
        <Input type="text" value={inputVal} onChange={(e) => setInputValue(e.target.value)} /> <Button>Szukaj</Button>
      </form>
    </header>
  );
};
