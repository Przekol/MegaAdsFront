import { createContext, FC, PropsWithChildren, useContext, useState } from 'react';

interface SearchContextProps {
  search: string;
  setSearch: (search: string) => void;
}

const SearchContext = createContext<SearchContextProps>({
  search: '',
  setSearch: (search: string) => {
    return;
  },
});

const SearchContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [search, setSearch] = useState('');

  return <SearchContext.Provider value={{ search, setSearch }}>{children}</SearchContext.Provider>;
};

const useSearch = () => {
  const { search, setSearch } = useContext(SearchContext);

  return { search, setSearch };
};

export { SearchContextProvider, useSearch };
