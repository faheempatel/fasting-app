import { h } from 'preact';

import partyPopperEmoji from '../../assets/party-popper-emoji.png';
import styles from './eid-card.module.scss';

import AppContainer from '../app-container/app-container';

const EidCard = () => (
  <AppContainer>
    <div class={styles.container}>
      <h1>Eid Mubarak!</h1>
      <img
        class={styles.emoji}
        src={partyPopperEmoji}
        alt="Party popper emoji"
      />
      <div class={styles.textContainer}>
        <p>May Allah bless you with a great day!</p>
        <p>
          I hope this Ramadan has been beneficial as well as healing. I pray our
          good acts have been accepted and that we see them continue.
        </p>
        <p>
          I hope FastingTime has been useful, it was a lot of fun (and a few
          headaches!) to build, so thank you for using it. It means a lot.
        </p>
        <p>
          As always, please keep me in your duas, and see you next Ramadan
          inshaAllah!
        </p>
        <p>
          JazakAllah khair,
          <br />
          <a href="https://github.com/faheempatel">Faheem</a>
        </p>
      </div>
    </div>
  </AppContainer>
);

export default EidCard;
