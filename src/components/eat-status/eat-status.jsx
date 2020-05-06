import { h } from 'preact';
import classNames from 'classnames';

import styles from './eat-status.module.scss';

export default ({ fastHasStarted }) => {
  const indicatorStyles = classNames(styles.indicator, {
    [styles.red]: fastHasStarted
  });
  return (
    <div class={styles.container}>
      <div class={indicatorStyles} />
      <h3>{fastHasStarted ? 'CAN’T EAT' : 'CAN EAT'}</h3>
    </div>
  );
};
