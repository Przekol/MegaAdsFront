import { createContext, FC, PropsWithChildren, useContext, useState } from 'react';

interface AddFromModalContextProps {
  addFromModalIsOpen: boolean;
  setAddFromModalIsOpen: (isOpen: boolean) => void;
}

const AddFromModalContext = createContext<AddFromModalContextProps>({
  addFromModalIsOpen: false,
  setAddFromModalIsOpen: (isOpen: boolean) => {
    return;
  },
});

const AddFromModalContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [addFromModalIsOpen, setAddFromModalIsOpen] = useState<boolean>(false);

  return (
    <AddFromModalContext.Provider value={{ addFromModalIsOpen, setAddFromModalIsOpen }}>
      {children}
    </AddFromModalContext.Provider>
  );
};

const useAddFromModal = () => {
  const { addFromModalIsOpen, setAddFromModalIsOpen } = useContext(AddFromModalContext);

  const openAddForm = () => setAddFromModalIsOpen(true);
  const closeAddFormModal = () => setAddFromModalIsOpen(false);

  return { addFromModalIsOpen, setAddFromModalIsOpen, openAddForm, closeAddFormModal };
};

export { AddFromModalContextProvider, useAddFromModal };
