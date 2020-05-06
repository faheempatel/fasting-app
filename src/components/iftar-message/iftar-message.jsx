import { h } from 'preact';

import Container from '../Container';
import { CONTAINER_VARIANTS } from '../variants';
import styles from './iftar-message.module.scss';

export default () => (
  <Container variant={CONTAINER_VARIANTS.IFTAR_SCREEN}>
    <div class={styles.innerContainer}>
      <h1>Time to break your fast</h1>
    </div>
  </Container>
);
