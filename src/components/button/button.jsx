import { h } from 'preact';
import styles from './button.module.scss';

export default ({ children, onClick }) => (
  <button class={styles.button} onClick={onClick}>
    {children}
  </button>
);
