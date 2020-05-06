import { h } from 'preact';
import classNames from 'classnames';

import styles from './app-container.module.scss';
import { CONTAINER_VARIANTS } from './variants';

export default ({ variant, children }) => {
  const appContainerStyles = classNames(styles.appContainer, {
    [styles.scrollable]: variant === CONTAINER_VARIANTS.SCROLLABLE,
    [styles.short]: variant === CONTAINER_VARIANTS.SHORT
  });
  return (
    <div class={styles.outerContainer}>
      <div class={appContainerStyles} variant={variant}>
        {children}
      </div>
    </div>
  );
};
