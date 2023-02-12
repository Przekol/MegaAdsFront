import * as React from 'react';
import styles from './Header.module.css';
import { Button, Input } from '../../common/UI';
import { FormEvent, useState } from 'react';
import { useAddFromModal, useSearch } from '../../../context';

export const Header = () => {
  const { search, setSearch } = useSearch();
  const { openAddForm } = useAddFromModal();
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
      <Button onClick={openAddForm}>Dodaj ogłoszenie</Button>
      <form className={styles.search} onSubmit={setSearchFromLocalState}>
        <Input type="text" value={inputVal} onChange={(e) => setInputValue(e.target.value)} /> <Button>Szukaj</Button>
      </form>
    </header>
  );
};
