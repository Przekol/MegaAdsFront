import * as React from 'react';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.css';
import { Link } from 'react-router-dom';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  to?: string;
}
export const Button = ({ children, to, ...rest }: Props) =>
  to ? (
    <Link className={styles.button} to={to}>
      {children}
    </Link>
  ) : (
    <button className={styles.button} {...rest}>
      {children}
    </button>
  );
