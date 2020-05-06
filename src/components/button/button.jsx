import { h } from 'preact';
import styles from './button.module.scss';

export default ({ children, onClick }) => (
  <button className={styles.button} onClick={onClick}>
    {children}
  </button>
);
