import { h } from 'preact';
import classNames from 'classnames';

import styles from './location-button.module.scss';

export default ({ text, onClick }) => {
  const buttonStyles = classNames(styles.button, {
    [styles.clickable]: onClick !== undefined
  });
  return (
    <button class={buttonStyles} onClick={onClick}>
      <p>{text}</p>
    </button>
  );
};
