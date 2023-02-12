import * as React from 'react';
import ModalReact, { Props as ModalProps } from 'react-modal';
import { ReactNode } from 'react';
import styles from './Modal.module.css';

ModalReact.setAppElement('#root');

interface Props extends ModalProps {
  children: ReactNode;
}
export const Modal = ({ children, ...rest }: Props) => {
  return (
    <ModalReact overlayClassName={styles.modalOverlay} className={styles.modalContent} {...rest}>
      {children}
    </ModalReact>
  );
};
