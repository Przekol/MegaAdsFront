import * as React from 'react';
import { Button } from '../../Button/Button';
import { Modal } from '../Modal';
import styles from './MessageModal.module.css';

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  isErrorMessage?: boolean;
  message: string;
}
export const MessageModal = ({ message, isOpen, closeModal, isErrorMessage = false }: Props) => {
  const className = isErrorMessage ? styles.messageText + ' ' + styles.messageError : styles.messageText;
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal}>
      <div className={styles.messageBox}>
        <p className={className}>{message}</p>
        <Button onClick={closeModal}>Powrót na stronę główną</Button>
      </div>
    </Modal>
  );
};
