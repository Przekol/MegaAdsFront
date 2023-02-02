import * as React from 'react';
import styles from './Input.module.css';
type Props = React.InputHTMLAttributes<HTMLInputElement>;
export const Input = ({ ...rest }: Props) => <input className={styles.input} {...rest} />;
