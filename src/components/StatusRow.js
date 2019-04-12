import { h } from 'preact';
import styled from 'preact-emotion';

import FlexRow from './FlexRow';
import EatStatus from './EatStatus';

const StatusRow = styled(FlexRow)`
  margin-top: 16px;
  align-items: center;
  padding: 8px 20px;

  button {
    margin-left: -15px;
    outline: 0;
    border: 3px solid var(--light-grey);
    border-radius: 100px;
    padding: 9px 22px;
    background: white;

    p {
      color: var(--grey);
      font-weight: 700;
    }
  }
`;

export default ({ fastHasStarted }) => (
  <StatusRow>
    <button onClick={() => alert('London only for now....')}>
      <p>London, UK</p>
    </button>
    <div className="separator" />
    <EatStatus fastHasStarted={fastHasStarted} />
  </StatusRow>
);
