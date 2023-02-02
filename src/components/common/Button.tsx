import * as React from 'react';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.css';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  rest?: ButtonHTMLAttributes<HTMLButtonElement>;
}
export const Button = (props: Props) => (
  <button className={styles.button} {...props.rest}>
    {props.children}
  </button>
);
