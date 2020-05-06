import { h } from 'preact';
import styles from './time-label.module.scss';

export default ({ text, time }) => (
  <div>
    <p class={styles.label}>{text}</p>
    <h2 class={styles.time}>{time}</h2>
  </div>
);
