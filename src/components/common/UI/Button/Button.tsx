import * as React from 'react';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.css';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}
export const Button = ({ children, ...rest }: Props) => (
  <button className={styles.button} {...rest}>
    {children}
  </button>
);
