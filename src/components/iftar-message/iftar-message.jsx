import { h } from 'preact';

import AppContainer from '../app-container/app-container';
import { CONTAINER_VARIANTS } from '../app-container/variants';
import styles from './iftar-message.module.scss';

export default () => (
  <AppContainer variant={CONTAINER_VARIANTS.SHORT}>
    <div class={styles.innerContainer}>
      <h1>Time to break your fast</h1>
    </div>
  </AppContainer>
);
